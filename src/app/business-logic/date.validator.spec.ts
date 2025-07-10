import { AbstractControl } from "@angular/forms";
import { maxDateTimeValidator, minDateTimeValidator } from "./date.validator";

describe('DateValidator', () => {

  it(`should return null when validated date is greater than min date`, () => {
    const control = { value: '2015-02-19T21:56:33Z' };
    const minDateTime = new Date(2000, 0, 0);

    const result =  minDateTimeValidator(minDateTime)(control as AbstractControl);

    expect(result).toBeNull();
  });

  it(`should return value when validated date is less than min date`, () => {
    const control = { value: '1999-02-19T21:56:33Z' };
    const minDateTime = new Date(2000, 0, 0);

    const result =  minDateTimeValidator(minDateTime)(control as AbstractControl);

    expect(result).toBeDefined();
    expect(result!['min']).toBeDefined();
    expect(result!['min'].value).toBe(control.value);
    expect(result!['min'].expected).toBe(minDateTime);
  });

  it(`should return null when validated date is less than max date`, () => {
    const control = { value: '2015-02-19T21:56:33Z' };
    const maxDateTime = new Date(2020, 0, 0);

    const result =  maxDateTimeValidator(maxDateTime)(control as AbstractControl);

    expect(result).toBeNull();
  });

  it(`should return value when validated date is greater than max date`, () => {
    const control = { value: '2015-02-19T21:56:33Z' };
    const maxDateTime = new Date(2000, 0, 0);

    const result =  maxDateTimeValidator(maxDateTime)(control as AbstractControl);

    expect(result).toBeDefined();
    expect(result!['max']).toBeDefined();
    expect(result!['max'].value).toBe(control.value);
    expect(result!['max'].expected).toBe(maxDateTime);
  });
});