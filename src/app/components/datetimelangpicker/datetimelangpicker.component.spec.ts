import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimeLangPickerComponent } from './datetimelangpicker.component';
import { getTranslocoModule } from '../../business-logic/transloco/transloco-testing.module';
import { DEFAULT_LOCALE, DEFAULT_SOLAR_TERM_DISPLAY_LANG } from '../../models/constants';

describe('DatetimezonepickerComponent', () => {
  let component: DateTimeLangPickerComponent;
  let fixture: ComponentFixture<DateTimeLangPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateTimeLangPickerComponent, getTranslocoModule()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateTimeLangPickerComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('dateTime', new Date());
    fixture.componentRef.setInput('nameLang', DEFAULT_SOLAR_TERM_DISPLAY_LANG);
    fixture.componentRef.setInput('locale', DEFAULT_LOCALE);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render link with dateTime parameter', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a')?.href).toContain('datetime=');
  });

  it('should render link with nameLang parameter if nameLang is not default', () => {
    fixture.componentRef.setInput('nameLang', 'ja');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a')?.href).toContain('namelang=ja');
  });

  it('should not render link with nameLang parameter if nameLang is default', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a')?.href).not.toContain('namelang=');
  });

  it('should render link with locale parameter if locale is not default', () => {
    fixture.componentRef.setInput('locale', 'ru');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a')?.href).toContain('locale=ru');
  });

  it('should not render link with locale parameter if locale is default', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a')?.href).not.toContain('locale=');
  });

  [
    { description: 'should display error if datetime is less than 1900-01-01', expectedInput: '1899-12-31T23:59', expectedResult: true },
    { description: 'should not display error if datetime is between 1900-01-01 and 2200-01-01', expectedInput: '2015-11-06T23:59', expectedResult: false },
    { description: 'should display error if datetime is greater than 2200-01-01', expectedInput: '2214-12-31T23:59', expectedResult: true },
  ].forEach(({description, expectedInput, expectedResult}) => {
    it(`${description}`, () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const dateTimeInput = compiled.querySelector('input');
      dateTimeInput!.value = expectedInput;
      dateTimeInput!.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(compiled.querySelector('#feedback')?.checkVisibility()).toEqual(expectedResult); 
    });
  });
});
