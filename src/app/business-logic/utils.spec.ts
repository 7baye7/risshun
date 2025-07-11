import { AvailableLangs } from '@jsverse/transloco';
import { Utils } from './utils';
import {Decimal} from 'decimal.js';

describe('Utils', () => {
  [
    { expectedInput: new Decimal(-213), expectedOutput: new Decimal(147) },
    { expectedInput: new Decimal(33), expectedOutput: new Decimal(33) },
  ].forEach(({expectedInput, expectedOutput}) => {
    it(`correctDegreeRange should correct ${expectedInput} degrees to ${expectedOutput}`, () => {
      const result = Utils.correctDegreeRange(expectedInput);
      expect(result.eq(expectedOutput)).toBeTrue();
    });
  });

  [
    { expectedInput: new Decimal(0), expectedOutput: new Decimal(0) },
    { expectedInput: new Decimal(30), expectedOutput: new Decimal(Math.PI).div(6) /* π/6 */ }
  ].forEach(({expectedInput, expectedOutput}) => {
    it(`toRadians should give ${expectedOutput} radians for ${expectedInput} degrees`, () => {
      const result = Utils.toRadians(expectedInput);
      expect(result.eq(expectedOutput)).toBeTrue();
    });
  });

  [
    { expectedInput: new Date(2025, 1, 8, 12, 32, 46, 673), expectedOutput: new Decimal(320) }
  ].forEach(({expectedInput, expectedOutput}) => {
    it(`getSolarEclipticLongitude calculates solar ecliptic longitude ${expectedOutput} for ${expectedInput}`, () => {
      const result = Utils.getSolarEclipticLongitude(expectedInput);
      expect(result.toNumber()).toBeCloseTo(expectedOutput.toNumber());
    });
  });

  [
    { expectedInput: ['en', 'ru'] },
    { expectedInput: [{ id: 'en', label: 'English' }, { id: 'ru', label: 'Russian' }] },
  ].forEach(({expectedInput}) => {
    it(`normalizeAvailableLangs normalizes Transloco languages`, () => {
      const result = Utils.normalizeAvailableLangs(expectedInput as AvailableLangs);
      expect(result).toEqual(['en', 'ru']);
    });
  });

  [
    { expectedInput: ['/foo/', '/bar/', '/baz.html'], expectedOutput: '/foo/bar/baz.html' },
    { expectedInput: ['/foo/bar', 'baz/' ], expectedOutput: '/foo/bar/baz/' },
    { expectedInput: [], expectedOutput: '' }
  ].forEach(({expectedInput, expectedOutput}) => {
    it(`pathJoin joins relative browser paths ${JSON.stringify(expectedInput)} into ${expectedOutput}`, () => {
      expect(Utils.pathJoin(expectedInput)).toBe(expectedOutput);
    });
  });
});
