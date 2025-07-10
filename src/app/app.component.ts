import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DateTimeLangPickerComponent } from './components/datetimelangpicker/datetimelangpicker.component';
import { CurrentSolarTermCardComponent } from './components/current-solar-term-card/current-solar-term-card.component';
import { SolarTermsTableComponent } from './components/solar-terms-table/solar-terms-table.component';
import { LocalePickerComponent } from './components/locale-picker/locale-picker.component';
import { Utils } from './business-logic/utils';
import { AVAILABLE_SOLAR_TERM_DISPLAY_LANGS, DEFAULT_SOLAR_TERM_DISPLAY_LANG, MAX_DATE, MIN_DATE } from './models/constants';
import {Decimal} from 'decimal.js';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { Subscription, take } from "rxjs";

@Component({
  selector: 'app-root',
  imports: [ DateTimeLangPickerComponent, CurrentSolarTermCardComponent, SolarTermsTableComponent, LocalePickerComponent, TranslocoPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('howitworks') howItWorks: ElementRef | null = null;
  nameLang = DEFAULT_SOLAR_TERM_DISPLAY_LANG;
  isLoading = false;
  locale: string;
  dtz: Date;
  solarEclipticLongitude: Decimal;
  modalWindowInnerHtml: string | undefined;

  private translocoSubscription: Subscription | null;

  constructor(private translocoService: TranslocoService, private route: ActivatedRoute, private titleService:Title)
  {
    this.dtz = new Date();
    this.solarEclipticLongitude = Utils.getSolarEclipticLongitude(this.dtz);

    this.locale = this.translocoService.getActiveLang();
    this.translocoSubscription = null;
  }  

  /**
   * Handles the change of the dateTime input.
   * @param d - The dateTime input value.
   */
  onDateTimeChanged(d: Date): void
  {
    this.dtz = d;
    this.solarEclipticLongitude = Utils.getSolarEclipticLongitude(this.dtz);
  }

  /**
   * Handles the change of the modalWindowData input.
   * @param innerHtml - The modalWindowData input value.
   */
  onModalWindowDataChanged(innerHtml: string) : void
  {
    this.modalWindowInnerHtml = innerHtml;
  }

  /**
   * Handles the click event of the how it works button.
   */
  onHowItWorksClicked() : void
  {
    this.onModalWindowDataChanged(this.howItWorks?.nativeElement.innerHTML);
  }

  /**
   * Handles the change of the locale input.
   * @param localeOption - The locale input value.
   */
  onLocaleChanged(localeOption: string) : void
  {
    this.locale = localeOption;
    this.isLoading = true;
    this.translocoSubscription?.unsubscribe();
    this.translocoSubscription = this.translocoService
      .load(this.locale)
      .pipe(take(1))
      .subscribe(() => {
        this.translocoService.setActiveLang(this.locale);
        this.isLoading = false;
      });
  }

  /**
   * Handles the initialization of the component.
   */
  ngOnInit(): void
  {
    this.translocoService.selectTranslate('app.title')
      .subscribe(translation => this.titleService.setTitle(translation));

    this.route.queryParams.subscribe(queryParams => {
      // set datetime
      const tentativeDate = new Date(queryParams['datetime']);
      if(!isNaN(tentativeDate.getTime()) && tentativeDate >= MIN_DATE && tentativeDate <= MAX_DATE)
      {
        this.dtz = tentativeDate;

        // recalculate ecliptic longitude
        this.solarEclipticLongitude = Utils.getSolarEclipticLongitude(this.dtz);
      }
      
      // set language to display native names
      this.nameLang = AVAILABLE_SOLAR_TERM_DISPLAY_LANGS.has(queryParams['namelang']) ? 
        queryParams['namelang'] : 
        DEFAULT_SOLAR_TERM_DISPLAY_LANG;
      
      // set locale
      const availableLocales = Utils.normalizeAvailableLangs(this.translocoService.getAvailableLangs());
      if(availableLocales.includes(queryParams['locale']) && queryParams['locale'] !== this.locale)
      {
        this.onLocaleChanged(queryParams['locale']);
      }
    });
  }

  /**
   * Handles the destruction of the component.
   */
  ngOnDestroy(): void {
    this.translocoSubscription?.unsubscribe();
    this.translocoSubscription = null;
  }
}