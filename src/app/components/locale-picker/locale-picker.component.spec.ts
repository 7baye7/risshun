import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalePickerComponent } from './locale-picker.component';
import { getTranslocoModule } from '../../business-logic/transloco/transloco-testing.module';
import { DEFAULT_LOCALE } from '../../models/constants';

describe('LocalePickerComponent', () => {
  let component: LocalePickerComponent;
  let fixture: ComponentFixture<LocalePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalePickerComponent, getTranslocoModule()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalePickerComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('locale', DEFAULT_LOCALE); 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
