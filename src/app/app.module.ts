import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { weatherservice } from './services/service.service';
import { WeatherAirComponent } from './weather-air/weather-air.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherAirComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [weatherservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
