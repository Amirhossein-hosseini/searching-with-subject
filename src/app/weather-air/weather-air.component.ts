import { weatherservice } from './../services/service.service';
import { Component, OnInit } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, filter, map, Observable, pipe, Subject, switchMap, tap, throwError,mergeMap, concatMap } from 'rxjs';
import { weatherDto } from '../Dto/weatherDto.dto';
import { weathergetWoeid } from '../Dto/weathergetWoeid.st,'
import * as _ from 'lodash'
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
 searchText = ''
  constructor(private weatherService:weatherservice) { }

  ngOnInit(): void {

// this.search$()


    this.searching = this.subject.pipe(
      tap(_ =>this.loading =true),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((res) =>this.weatherService.getCityByApi(res)),
      tap(_ =>this.loading = false),
      // catchError(err => {throw 'error in get woeid from api ' + err})



    )
  }



  search($event:any){
    this.subject.next($event)
  }






  getCity(woeid:number):Observable<weatherDto[]>{

 return  this.searching = this.weatherService.getLocationByWoeid(woeid).pipe(
      map((res) =>res.filter((res) =>res.woeid === res.woeid   )),

 catchError(err => {throw 'error in get woeid from api ' + err})
   )



  }

  getAlll(){
    const data = this.searching
    return data
  }






  findCityByGetCity(city:string):Observable<weatherDto[]>{
  //  return this.searching.pipe(map((res) =>res.filter((res) =>res.woeid === res.woeid)))


return this.searching = this.weatherService.getCityByApi(city).pipe(
  map((res) =>res.filter((res) =>res.title === res.title && res.woeid === res.woeid)),
  catchError(err => {throw 'error in get city name from api ' + err})

)

  }
}

