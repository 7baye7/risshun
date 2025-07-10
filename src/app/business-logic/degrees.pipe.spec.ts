import { DegreesPipe } from './degrees.pipe';
import {Decimal} from 'decimal.js';

describe('DegreesPipe', () => {

  const pipe = new DegreesPipe();

  [
    { expectedInput: new Decimal(1), expectedOutput: '1° 0\' 0"' },
    { expectedInput: new Decimal(156.742), expectedOutput: '156° 44\' 31"' },
  ].forEach(({expectedInput, expectedOutput}) => {
    it(`should transform "${expectedInput}" to "${expectedOutput}"`, () => {
      expect(pipe.transform(expectedInput)).toBe(expectedOutput);  
    });
  });
});
