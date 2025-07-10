import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { getTranslocoModule } from './business-logic/transloco/transloco-testing.module';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DEFAULT_LOCALE, DEFAULT_SOLAR_TERM_DISPLAY_LANG } from './models/constants';
import { By } from '@angular/platform-browser';
import {Decimal} from 'decimal.js';

describe('AppComponent', () => {
  const mockQueryParams = new BehaviorSubject<any>({});

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, getTranslocoModule()],
      providers: [{
                provide: ActivatedRoute,
                useValue: {
                  queryParams: mockQueryParams.asObservable()
                }
            }]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should set datetime from query string', () => {
    const testDatetime = '1964-02-09T15:32';
    const fixture = TestBed.createComponent(AppComponent);
    mockQueryParams.next({ datetime: testDatetime });
    fixture.detectChanges();

    expect(fixture.componentInstance.dtz).toEqual(new Date(testDatetime));
  });

  [
    { expectedInput: '1899-12-31T23:59' },
    { expectedInput: '2214-12-31T23:59' },
  ].forEach(({expectedInput}) => {
    it('should not set datetime from query string if it is not between min and max date', () => {
      const fixture = TestBed.createComponent(AppComponent);
      mockQueryParams.next({ datetime: expectedInput });
      fixture.detectChanges();

      // check if dates are close except milliseconds (send them to decimal points and check 0 decimal points)
      expect(fixture.componentInstance.dtz.getTime() / 1000).toBeCloseTo(new Date().getTime() / 1000, 0);
    });
  });

  it('should set nameLang from query string', () => {
    const fixture = TestBed.createComponent(AppComponent);
    mockQueryParams.next({ namelang: 'ja' });
    fixture.detectChanges();

    expect(fixture.componentInstance.nameLang).toBe('ja');
  });

  it('should not set nameLang from query string if nameLang is not an available language', () => {
    const fixture = TestBed.createComponent(AppComponent);
    mockQueryParams.next({ namelang: 'foo' });
    fixture.detectChanges();

    expect(fixture.componentInstance.nameLang).toBe(DEFAULT_SOLAR_TERM_DISPLAY_LANG);
  });

  it('should not set locale from query string if locale is not an available language', () => {
    const fixture = TestBed.createComponent(AppComponent);
    mockQueryParams.next({ locale: 'foo' });
    fixture.detectChanges();

    expect(fixture.componentInstance.locale).toBe(DEFAULT_LOCALE);
  });

  it('should recalculate solar ecliptic longitude when datetime changes', () => {
    const testDateTime = new Date(2025, 1, 8, 12, 32, 46, 673);
    const fixture = TestBed.createComponent(AppComponent);
    const datetimelangpicker = fixture.debugElement.query(By.css('app-datetimelangpicker'));

    datetimelangpicker.triggerEventHandler('dateTimeChange', testDateTime);
    fixture.detectChanges();

    expect(fixture.componentInstance.dtz).toEqual(testDateTime);
    expect(fixture.componentInstance.solarEclipticLongitude.toNumber()).toBeCloseTo(new Decimal(320).toNumber());
  });
});
