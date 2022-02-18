import { weatherservice } from './../services/service.service';
import { Component, OnInit } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, filter, map, Observable, pipe, Subject, switchMap, tap, throwError,mergeMap, concatMap, of } from 'rxjs';
import { weatherDto } from '../Dto/weatherDto.dto';
import { weathergetWoeid } from '../Dto/weathergetWoeid.st,'
import * as _ from 'lodash'
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-weather-air',
  templateUrl: './weather-air.component.html',
  styleUrls: ['./weather-air.component.scss']
})
export class WeatherAirComponent implements OnInit {
//  weatherData:weatherDto[] = []
withRefresh = false
 searching!:Observable<weatherDto[]>
 private subject = new Subject<string>()
 loading:boolean =false
  constructor(private weatherService:weatherservice, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

   this.searching = this.route.params.pipe(
     switchMap((param) =>this.getCity(param['woeid'])),
     map((res) =>res)
   )



     this.searching = this.subject.pipe(
      tap(_ =>this.loading =true),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) =>this.findCityByGetCity(term)),
      tap(_ =>this.loading = false),


    )


    //  this.searching = this.subject.pipe(
    //   tap(_ =>this.loading =true),
    //   debounceTime(300),
    //   distinctUntilChanged(),
    //   concatMap((term) =>this.weatherService.getCityByApi(term)),
    //   tap(_ =>this.loading = false),


    // )


//  this.route.params.subscribe((params) =>{
//       return this.getCity(params['woeid']).pipe(
//         map((res) =>res.filter((res) =>res.woeid === res.woeid))
//       )

//     }
//)
     }


  search($event:any){
    this.subject.next($event)
  }






  getCity(woeid:number):Observable<weatherDto[]>{

  return this.searching = this.weatherService.getLocationByWoeid(woeid).pipe(
    map((res) =>res)
  )


  }








  findCityByGetCity(city:string){
return this.searching = this.weatherService.getCityByApi(city).pipe(

  map((res) =>res.filter((res) =>res.title === res.title)),

  catchError(err => {throw 'error in get city name from api ' + err.status})

 )
  }
}

