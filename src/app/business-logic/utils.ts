import { AvailableLangs } from '@jsverse/transloco';
import {Decimal} from 'decimal.js';

export class Utils {

  /**
   * Corrects a Decimal value to be within the range of 0 to 360 degrees.
   * @param d - The Decimal value to correct.
   * @returns The corrected Decimal value.
   */
  static correctDegreeRange(d: Decimal): Decimal
  {
    return d.lessThan(0) ? d.plus(360) : d;
  }

  /**
   * Converts a Decimal value to radians.
   * @param d - The Decimal value to convert.
   * @returns The converted Decimal value in radians.
   */
  static toRadians(d: Decimal): Decimal
  {
    return d.mul(Math.PI).div(180); // convert degrees to radians
  }

  /**
   * Calculates the solar ecliptic longitude for a given date.
   * @param dt - The date to calculate the solar ecliptic longitude for.
   * @returns The solar ecliptic longitude as a Decimal value.
   */
  static getSolarEclipticLongitude(dt: Date): Decimal
  {
    // https://stackoverflow.com/a/11760121
    const julianDate = (new Decimal(dt.getTime()).div(86400000))
      .minus(new Decimal(dt.getTimezoneOffset()).div(1440))
      .plus(2440587.5); // days from 4713 B.C. to 1970 A.D.

    //https://squarewidget.com/solar-coordinates/
    const T = julianDate.minus(2451545.0).div(36525);
    const meanLongitude = new Decimal(280.46646)
      .plus(T.mul(36000.76983))
      .plus(T.pow(2).mul(0.0003032));
    let meanAnomaly = Utils.correctDegreeRange(new Decimal(357.52911).plus(T.mul(35999.05029)).minus(T.pow(2).mul(0.0001537)));
    const meanAnomalyRadians = Utils.toRadians(meanAnomaly);
    const equationOfCenter = 
      new Decimal(1.914602).minus(T.mul(0.004817)).minus(T.pow(2).mul(0.000014)).mul(meanAnomalyRadians.sin())
      .plus(new Decimal(0.019993).minus(T.mul(0.000101)).mul(meanAnomalyRadians.mul(2).sin()))
      .plus(meanAnomalyRadians.mul(3).sin().mul(0.000289));
    const trueGeometricLongitude = Utils.correctDegreeRange(meanLongitude.plus(equationOfCenter));
    const correctionForNutationAndAberration = Utils.toRadians(new Decimal(125.04).minus(T.mul(1934.136)));
    const apparentLongitude = trueGeometricLongitude.minus(0.00569).minus(correctionForNutationAndAberration.sin().mul(0.00478));
    return Utils.correctDegreeRange(apparentLongitude.mod(360));
  }

  /**
   * Normalizes the available languages.
   * @param availableLangs - The available languages.
   * @returns The normalized available languages.
   */
  static normalizeAvailableLangs(availableLangs: AvailableLangs): string[]
  {
    if (Array.isArray(availableLangs) && typeof availableLangs[0] === 'string')
    {
      return availableLangs as string[];
    }
    else
    {
      return (availableLangs as { id: string; label: string }[]).map(lang => lang.id);
    }
  }
}
