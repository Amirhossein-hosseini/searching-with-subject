import { weatherservice } from './../services/service.service';
import { Component, OnInit, ɵsetCurrentInjector } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, filter, map, Observable, pipe, Subject, switchMap, tap, throwError,mergeMap, concatMap, of, combineLatest, retry } from 'rxjs';
import { weatherDto } from '../Dto/weatherDto.dto';
import { weathergetWoeid } from '../Dto/weathergetWoeid.st,'
import * as _ from 'lodash'
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
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
 text =''
  constructor(private weatherService:weatherservice, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {





   this.searching =  this.searching = this.subject.pipe(
       tap(_ =>this.loading =true),
       debounceTime(300),
       distinctUntilChanged(),
       switchMap((term) => this.findCityByGetCity(term)),
       tap(_ =>this.loading = false),


     )


    //  this.searching = this.subject.pipe(
    //   tap(_ =>this.loading =true),
    //   debounceTime(300),
    //   distinctUntilChanged(),
    //   concatMap((term) =>this.weatherService.getCityByApi(term)),
    //   tap(_ =>this.loading = false),


    // )

     }


getSearching():Observable<weatherDto[]>{
  const data = this.searching
  return data
}


  search(text:string){
    this.subject.next(text)
  }





getCity(woeid:number):Observable<weatherDto[]>{

  return  this.searching = this.weatherService.getLocationByWoeid(woeid).pipe(
    map((res) =>res.filter((res) =>res.woeid === res.woeid))
  )



//  const data = this.weatherService.getAll().pipe(
//    map((res) =>{
//      return this.searching = this.weatherService.getLocationByWoeid(woeid).pipe(map((res) =>res))
//    })

//  )









  }








  findCityByGetCity(city:string):Observable<weatherDto[]>{
    let data =  _.find(this.searching,(o:number) =>{
      return this.searching = this.getCity(o)
     })

     if(city){
       data = this.weatherService.getCityByApi(city).pipe(map((res =>res)))
       this.searching = data
     }

    return this.searching

    // data = this.weatherService.getCityByApi(city).pipe(map((res) =>res))

    // this.searching = data

    // return this.searching

  //  return data

  }
}

