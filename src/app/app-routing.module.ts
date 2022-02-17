import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherAirComponent } from './weather-air/weather-air.component';

const routes: Routes = [
  {path:'WeatherAir',component:WeatherAirComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
