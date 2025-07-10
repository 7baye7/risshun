import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarTermsTableComponent } from './solar-terms-table.component';
import { getTranslocoModule } from '../../business-logic/transloco/transloco-testing.module';
import { DEFAULT_SOLAR_TERM_DISPLAY_LANG } from '../../models/constants';
import {Decimal} from 'decimal.js';

describe('SolarTermsTableComponent', () => {
  let component: SolarTermsTableComponent;
  let fixture: ComponentFixture<SolarTermsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolarTermsTableComponent, getTranslocoModule()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolarTermsTableComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('nameLang', DEFAULT_SOLAR_TERM_DISPLAY_LANG);
    fixture.componentRef.setInput('currentSolarEclipticLongitude', new Decimal(317.1567))
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  [
    { description: 'spring', expectedInput: new Decimal(317.1567), expectedResult: new Map<number, boolean>([ [ 315, true ], [ 45, false ], [135, false], [225, false] ]) },
    { description: 'summer', expectedInput: new Decimal(49.215), expectedResult: new Map<number, boolean>([ [ 315, true ], [ 45, true ], [135, false], [225, false] ]) },
    { description: 'autumn', expectedInput: new Decimal(153.745), expectedResult: new Map<number, boolean>([ [ 315, true ], [ 45, true ], [135, true], [225, false] ]) },
    { description: 'winter', expectedInput: new Decimal(284.129), expectedResult: new Map<number, boolean>([ [ 315, true ], [ 45, true ], [135, true], [225, true] ]) },
  ].forEach(({description, expectedInput, expectedResult}) => {
    it(`should have ${description} filled with background color for ${expectedInput} solar ecliptic longitude`, () => {
      fixture.componentRef.setInput('currentSolarEclipticLongitude', expectedInput);
      fixture.detectChanges();
      for(const [seasonLongitude, seasonCellShouldBeFilled] of expectedResult)
      {
        const isFilled = Object.keys(fixture.componentInstance.seasonCellStyles.get(seasonLongitude) as object).length !== 0;
        expect(isFilled).toBe(seasonCellShouldBeFilled);
      }
    });
  });
});