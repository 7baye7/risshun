import { Component, computed, input, model, OnChanges, OnInit, Signal, SimpleChanges } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { DegreesPipe } from '../../business-logic/degrees.pipe';
import { Utils } from '../../business-logic/utils';
import { AVAILABLE_SOLAR_TERM_DISPLAY_LANGS, DEFAULT_LOCALE, DEFAULT_SOLAR_TERM_DISPLAY_LANG, KEY_VALUE_PIPE_ORIGINAL_ORDER, MAX_DATE, MIN_DATE} from '../../models/constants';
import { TranslocoPipe } from '@jsverse/transloco';
import { maxDateTimeValidator, minDateTimeValidator } from '../../business-logic/date.validator';

@Component({
  selector: 'app-datetimelangpicker',
  imports: [ FormsModule, ReactiveFormsModule, CommonModule, DegreesPipe, TranslocoPipe ],
  providers: [DatePipe],
  templateUrl: './datetimelangpicker.component.html',
  styleUrl: './datetimelangpicker.component.scss'
})
export class DateTimeLangPickerComponent implements OnInit, OnChanges
{
  readonly AVAILABLE_SOLAR_TERM_DISPLAY_LANGS = AVAILABLE_SOLAR_TERM_DISPLAY_LANGS;
  readonly KEY_VALUE_PIPE_ORIGINAL_ORDER = KEY_VALUE_PIPE_ORIGINAL_ORDER;
  readonly MIN_DATE = MIN_DATE;
  readonly MAX_DATE = MAX_DATE;
  dateTime = model.required<Date>();
  nameLang = model.required<string>();
  locale = input.required<string>();
  solarEclipticLongitude = computed(() => Utils.getSolarEclipticLongitude(this.dateTime()));
  link: Signal<string>;
  dateTimeFormControl: FormControl;
  dateFormatString = 'yyyy-MM-ddTHH:mm';

  constructor(private datePipe: DatePipe)
  {
    // computes the link for the current datetime, namelang, and locale.
    this.link = computed(() => {
      let queryParams = [];
      const transformedDate = this.datePipe.transform(this.dateTime(), this.dateFormatString);
      if(transformedDate)
      {
        queryParams.push(['datetime', transformedDate]);
      }
      if(this.nameLang() != DEFAULT_SOLAR_TERM_DISPLAY_LANG)
      {
        queryParams.push(['namelang', this.nameLang()]);
      }
      if(this.locale() != DEFAULT_LOCALE)
      {
        queryParams.push(['locale', this.locale()]);
      }

      return `?${new URLSearchParams(queryParams).toString()}`
    });

    // creates a FormControl for the dateTime input.
    this.dateTimeFormControl = new FormControl('',
      [
        Validators.required, 
        minDateTimeValidator(MIN_DATE), 
        maxDateTimeValidator(MAX_DATE)
      ]
    );
  }

  /**
   * Handles the change of the language selection.
   * @param option - The selected language option.
   */
  onLangSelectionChanged(option: string)
  {
    this.nameLang.set(option);
  }

  /**
   * Handles the change of the dateTime input.
   * @param dateString - The dateTime input value.
   */
  ngOnInit(): void {
    this.dateTimeFormControl.valueChanges.subscribe((dateString) =>
    {
      const tentativeDate = new Date(dateString);
      if (!isNaN(tentativeDate.getTime()))
      {
        this.dateTime.set(tentativeDate);
      }
    });
  }

  /**
   * Forces FormControl to react to model changes
   * @param changes - The changes to the dateTime input.
   */
  ngOnChanges(changes: SimpleChanges): void {
    const value = changes['dateTime'] ? changes['dateTime'].currentValue : this.dateTime();
    this.dateTimeFormControl.setValue(this.datePipe.transform(value, this.dateFormatString));
  }
}
