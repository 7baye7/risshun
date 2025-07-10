import { Component, input, output } from '@angular/core';
import { KeyValuePipe, NgStyle } from '@angular/common';
import { toObservable } from '@angular/core/rxjs-interop';
import { SOLAR_TERMS } from '../../models/constants';
import { KEY_VALUE_PIPE_ORIGINAL_ORDER } from '../../models/constants';
import {Decimal} from 'decimal.js';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-solar-terms-table',
  imports: [ NgStyle, KeyValuePipe, TranslocoPipe ],
  templateUrl: './solar-terms-table.component.html',
  styleUrl: './solar-terms-table.component.scss'
})
export class SolarTermsTableComponent {
  readonly SOLAR_TERMS = SOLAR_TERMS;
  readonly KEY_VALUE_PIPE_ORIGINAL_ORDER = KEY_VALUE_PIPE_ORIGINAL_ORDER;
  nameLang = input.required<string>();
  currentSolarEclipticLongitude = input.required<Decimal>();
  seasonCellStyles = new Map<number, Record<string, string>>();
  solarTermCellStyles = new Map<number, Record<string, string>>();
  pentadCellStyles = new Map<number, Record<string, string>>();
  modalWindowDataChanged = output<string>();

  private smoothGradientPercentageStep = 3;
  private mainGradientColor = '#E4FDE4';
  private solarTermColor = '#CEF9CE';
  private seasonColor = '#B8F4B8';

  constructor()
  {
    // display past pentads as filled with background color, 
    // current pentad as partially filled with gradient,
    // and future pentads as not filled.
    // do the same for solar terms and seasons
    toObservable(this.currentSolarEclipticLongitude).subscribe((newLongitude) => {
      for(const [seasonLongitude, season] of this.SOLAR_TERMS)
      {
        let seasonCellShouldBeFilled = false;
        for(const [solarTermLongitude, solarTerm] of season.solarTerms)
        {
          let solarTermCellShouldBeFilled = false;
          for(const [pentadLongitude, pentad] of solarTerm.pentads)
          {
            const pentadCellGradientStyle = this.getCellGradient(pentadLongitude);
            this.pentadCellStyles.set(pentadLongitude, pentadCellGradientStyle);
            if(!solarTermCellShouldBeFilled)
            {
              solarTermCellShouldBeFilled = Object.keys(pentadCellGradientStyle).length !== 0;
            }
          }
          this.solarTermCellStyles.set(solarTermLongitude, solarTermCellShouldBeFilled ? this.getFullyFilledCellStyle(this.solarTermColor) : {});
          if(!seasonCellShouldBeFilled)
          {
            seasonCellShouldBeFilled = solarTermCellShouldBeFilled;
          }
        }
        this.seasonCellStyles.set(seasonLongitude, seasonCellShouldBeFilled ? this.getFullyFilledCellStyle(this.seasonColor) : {});
      }
    });
  }

  /**
   * Emits the explanation for the current solar term.
   * @param explanation - The explanation to emit.
   */ 
  onExplanationClicked(explanation: string) : void
  {
    this.modalWindowDataChanged.emit(explanation);
  }

  /**
   * Gets the gradient for a cell.
   * @param pentadLongitude - The longitude of the pentad.
   * @returns The gradient for the cell.
   */
  private getCellGradient(pentadLongitude: number) : Record<string, string>
  {
    const pentadLongitudeStep = 5;
    const adjustedPentadLongitude = this.adjustLongitude(new Decimal(pentadLongitude));
    const adjustedCurrentSolarEclipticLongitude = this.adjustLongitude(this.currentSolarEclipticLongitude());
    const diff = adjustedCurrentSolarEclipticLongitude.minus(adjustedPentadLongitude);
    if(diff.lessThan(0))
    {
      return {};
    }
    else if(diff.greaterThanOrEqualTo(0) && diff.lessThan(pentadLongitudeStep))
    {
      const diffPercentage = diff.mul(100).div(pentadLongitudeStep);
      const tentativeSmoothGradientPercentage = diffPercentage.minus(this.smoothGradientPercentageStep);
      const smoothGradientPercentage = tentativeSmoothGradientPercentage.greaterThan(0) ? 
        tentativeSmoothGradientPercentage : 
        diffPercentage;
      return { 'background-image': 
        `linear-gradient(90deg, ${this.mainGradientColor} 0%, ${this.mainGradientColor} ${smoothGradientPercentage}%, rgba(0,0,0,0) ${diffPercentage}%)` };
    }
    return this.getFullyFilledCellStyle();
  }

  /**
   * Gets the fully filled cell style.
   * @param htmlColor - The color of the cell.
   * @returns The fully filled cell style.
   */
  private getFullyFilledCellStyle(htmlColor?: string) : Record<string, string>
  {
    return { 'background-color': htmlColor ?? this.mainGradientColor };
  }

  /**
   * Adjusts the longitude to be within the range of 0 to 360 degrees.
   * @param longitude - The longitude to adjust.
   * @returns The adjusted longitude.
   */
  private adjustLongitude(longitude: Decimal) : Decimal
  {
    const imaginaryZero = 315; // for convenience, let's pretend that 315° is 0°, 0° is 90° etc.
    return longitude.greaterThanOrEqualTo(imaginaryZero) ? 
      longitude.minus(imaginaryZero) : longitude.plus(360).minus(imaginaryZero);
  }
}
