import { weatherservice } from './../services/service.service';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, map, Observable, pipe, Subject, switchMap, tap } from 'rxjs';
import { weatherDto } from '../Dto/weatherDto.dto';
import { weathergetWoeid } from '../Dto/weathergetWoeid.st,'

@Component({
  selector: 'app-weather-air',
  templateUrl: './weather-air.component.html',
  styleUrls: ['./weather-air.component.scss']
})
export class WeatherAirComponent implements OnInit {
//  weatherData:weatherDto[] = []
 searching!:Observable<weatherDto[]>
 private subject = new Subject<string>()
 loading:boolean =false
  constructor(private weatherService:weatherservice) { }

  ngOnInit(): void {
    this.searching = this.subject.pipe(
      tap(_ =>this.loading =true),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((res) =>this.weatherService.getCityByApi(res)),
      tap(_ =>this.loading = false)

    )
  }

  search($event:string){
    this.subject.next($event)
  }



  getCity(city:weathergetWoeid):Observable<weatherDto[]>{

   this.searching = this.weatherService.getLocationByWoeid(city.woeid,city.applicable_date).pipe(
     map((res) =>res.filter((res) =>res.woeid === res.woeid && res.applicable_date === res.applicable_date && res.title === res.title)),
   )

return this.searching


  }

  findCityByGetCity(city:string){
  //  return this.searching.pipe(map((res) =>res.filter((res) =>res.woeid === res.woeid)))
this.searching = this.weatherService.getCityByApi(city).pipe(
  map((res) =>res.filter((res) =>res.title === res.title && res.woeid === res.woeid ))
)

 return this.searching
  }
}

