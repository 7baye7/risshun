import { Pipe, PipeTransform } from '@angular/core';
import {Decimal} from 'decimal.js';

@Pipe({
  name: 'degrees'
})
export class DegreesPipe implements PipeTransform {

  /**
   * Transforms a Decimal value into a string representation of degrees, minutes, and seconds.
   * @param value - The Decimal value to transform.
   * @returns A string representation of the value in degrees, minutes, and seconds.
   */
  transform(value: Decimal): string
  {
    const v = new Decimal(value);
    const degrees = v.floor();
    const minutesWithDecimalPart = v.minus(degrees).mul(60);
    const minutes = minutesWithDecimalPart.floor();
    const seconds = minutesWithDecimalPart.minus(minutes).mul(60).floor();
    return `${degrees}° ${minutes}' ${seconds}"`;
  }

}
