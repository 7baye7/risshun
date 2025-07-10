import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

/**
 * Validates that a date is greater than or equal to a minimum date.
 * @param minDateTime - The minimum date to validate against.
 * @returns A validation error if the date is less than the minimum date, otherwise null.
 */ 
export function minDateTimeValidator(minDateTime: Date): ValidatorFn 
{
    return (control: AbstractControl): ValidationErrors | null => {
        if(!control.value)
        {
            return null;
        }
        const d = new Date(control.value);
        return minDateTime.getTime() < d.getTime() ? null : { 'min': { value: control.value, expected: minDateTime } };
    };
}

/**
 * Validates that a date is less than or equal to a maximum date.
 * @param maxDateTime - The maximum date to validate against.
 * @returns A validation error if the date is greater than the maximum date, otherwise null.
 */
export function maxDateTimeValidator(maxDateTime: Date): ValidatorFn 
{  
    return (control: AbstractControl): ValidationErrors | null => {
        if(!control.value)
        {
            return null;
        }
        const d = new Date(control.value);
        return maxDateTime.getTime() > d.getTime() ? null : { 'max': { value: control.value, expected: maxDateTime } };
    };
}