import { Component, input, output } from '@angular/core';
import { SolarTermInfo, Pentad, Season } from '../../models/solar-term-info';
import { Utils } from '../../business-logic/utils';
import { toObservable } from '@angular/core/rxjs-interop';
import { SOLAR_TERMS } from '../../models/constants';
import {Decimal} from 'decimal.js';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-current-solar-term-card',
  imports: [TranslocoPipe],
  templateUrl: './current-solar-term-card.component.html',
  styleUrl: './current-solar-term-card.component.scss'
})
export class CurrentSolarTermCardComponent {
  nameLang = input.required<string>();
  currentSolarEclipticLongitude = input.required<Decimal>();
  season = <Season>{};
  solarTerm = <SolarTermInfo>{};
  pentad = <Pentad>{};
  modalWindowDataChanged = output<string>();

  constructor()
  {
    // recalculate current season-term-pentad when ecliptic longitude changes
    toObservable(this.currentSolarEclipticLongitude).subscribe((newLongitude) => {
      this.season = this.getSeason(newLongitude);
      this.solarTerm = this.getSolarTerm(newLongitude, this.season);
      this.pentad = this.getPentad(newLongitude, this.solarTerm);
    });
  }

  /**
   * Rounds a Decimal value to the nearest multiple of a rounding step.
   * @param v - The Decimal value to round.
   * @param roundingStep - The step to round to.
   * @returns The rounded Decimal value.
   */
  private round(v: Decimal, roundingStep: Decimal): Decimal
  {
    return v.div(roundingStep).floor().mul(roundingStep);
  }

  /**
   * Gets the season for a given solar ecliptic longitude.
   * @param solarEclipticLongitude - The solar ecliptic longitude to get the season for.
   * @returns The season.
   */
  private getSeason(solarEclipticLongitude: Decimal): Season
  {
    // these convoluted calculations aim to account for the fact
    // that seasons last 90 degrees on the solar ecliptic,
    // but spring is 315-45 degrees, not 0-90 degrees
    // Inconvenient!
    const roundingStep = new Decimal(45);
    let roundedSolarEclipticLongitude = this.round(solarEclipticLongitude, roundingStep);
    roundedSolarEclipticLongitude = roundedSolarEclipticLongitude.mod(roundingStep.mul(2)).eq(roundingStep) ? 
      roundedSolarEclipticLongitude : 
      roundedSolarEclipticLongitude.minus(roundingStep);
    roundedSolarEclipticLongitude = Utils.correctDegreeRange(roundedSolarEclipticLongitude);
    const season = SOLAR_TERMS.get(roundedSolarEclipticLongitude.toNumber());
    if(!season)
    {
      throw new Error(`No season for solar ecliptic longitude = ${solarEclipticLongitude}`);
    }
    return season;
  }

  /**
   * Gets the solar term for a given solar ecliptic longitude and season.
   * @param solarEclipticLongitude - The solar ecliptic longitude to get the solar term for.
   * @param season - The season to get the solar term for.
   * @returns The solar term.
   */
  private getSolarTerm(solarEclipticLongitude: Decimal, season: Season): SolarTermInfo
  {
    const roundingStep = new Decimal(15);
    const solarTerm = season.solarTerms.get(this.round(solarEclipticLongitude, roundingStep).toNumber());
    if(!solarTerm)
    {
      throw new Error(`No solar term for solar ecliptic longitude = ${solarEclipticLongitude}`);
    }
    return solarTerm;
  }

  /**
   * Gets the pentad for a given solar ecliptic longitude and solar term.
   * @param solarEclipticLongitude - The solar ecliptic longitude to get the pentad for.
   * @param solarTerm - The solar term to get the pentad for.
   * @returns The pentad.
   */
  private getPentad(solarEclipticLongitude: Decimal, solarTerm: SolarTermInfo): Pentad
  {
    const roundingStep = new Decimal(5);
    const pentad = solarTerm.pentads.get(this.round(solarEclipticLongitude, roundingStep).toNumber());
    if(!pentad)
    {
      throw new Error(`No pentad for solar ecliptic longitude = ${solarEclipticLongitude}`);
    }
    return pentad;
  }

  /**
   * Emits the explanation for the current solar term.
   * @param explanation - The explanation to emit.
   */
  onExplanationClicked(explanation: string) : void
  {
    this.modalWindowDataChanged.emit(explanation);
  }
}
