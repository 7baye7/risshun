import { Component, model, OnChanges, SimpleChanges } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { KEY_VALUE_PIPE_ORIGINAL_ORDER } from '../../models/constants';
import { TranslocoService } from '@jsverse/transloco';
import { Utils } from '../../business-logic/utils';

@Component({
  selector: 'app-locale-picker',
  imports: [UpperCasePipe],
  templateUrl: './locale-picker.component.html',
  styleUrl: './locale-picker.component.scss'
})
export class LocalePickerComponent implements OnChanges {
  readonly KEY_VALUE_PIPE_ORIGINAL_ORDER = KEY_VALUE_PIPE_ORIGINAL_ORDER;
  locales: string[];
  locale = model.required<string>();

  constructor(private translocoService: TranslocoService)
  {
    this.locales = Utils.normalizeAvailableLangs(this.translocoService.getAvailableLangs());
  }

  /**
   * Handles the click event of the locale selector.
   * @param localeOption - The selected locale option.
   */
  onLocaleSelectorClicked(localeOption: string) : void
  {
    this.locale.set(localeOption);
  }

  /**
   * Handles the change event of the locale selector.
   * @param changes - The changes to the locale selector.
   */
  ngOnChanges(changes: SimpleChanges) 
  {
    // refresh component
  }
}
