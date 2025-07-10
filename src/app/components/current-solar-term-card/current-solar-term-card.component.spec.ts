import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSolarTermCardComponent } from './current-solar-term-card.component';
import { getTranslocoModule } from '../../business-logic/transloco/transloco-testing.module';
import { DEFAULT_SOLAR_TERM_DISPLAY_LANG } from '../../models/constants';
import {Decimal} from 'decimal.js';

describe('CurrentSolarTermCardComponent', () => {
  let component: CurrentSolarTermCardComponent;
  let fixture: ComponentFixture<CurrentSolarTermCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentSolarTermCardComponent, getTranslocoModule()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentSolarTermCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('nameLang', DEFAULT_SOLAR_TERM_DISPLAY_LANG);
    fixture.componentRef.setInput('currentSolarEclipticLongitude', new Decimal(317.1567));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  [
    { expectedInput: new Decimal(317.1567), expectedOutput: 'Spring' },
    { expectedInput: new Decimal(49.215), expectedOutput: 'Summer' },
    { expectedInput: new Decimal(153.745), expectedOutput: 'Autumn' },
    { expectedInput: new Decimal(284.129), expectedOutput: 'Winter' },
  ].forEach(({expectedInput, expectedOutput}) => {
    it(`should have ${expectedOutput} as season for ${expectedInput} solar ecliptic longitude`, () => {
      fixture.componentRef.setInput('currentSolarEclipticLongitude', expectedInput);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('span[data-id="season"]')?.textContent).toBe(expectedOutput);
    });
  });
}); 
