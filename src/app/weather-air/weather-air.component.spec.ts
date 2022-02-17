import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAirComponent } from './weather-air.component';

describe('WeatherAirComponent', () => {
  let component: WeatherAirComponent;
  let fixture: ComponentFixture<WeatherAirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherAirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
