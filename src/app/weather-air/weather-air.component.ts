import { weatherservice } from './../services/service.service';
import { Component, OnInit } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, filter, map, Observable, pipe, Subject, switchMap, tap, throwError,mergeMap, concatMap, of, combineLatest } from 'rxjs';
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






    //   this.searching = this.subject.pipe(
    //    tap(_ =>this.loading =true),
    //    debounceTime(300),
    //    distinctUntilChanged(),
    //    switchMap((term) =>this.findCityByGetCity(term)),
    //    tap(_ =>this.loading = false),


    //  )


     this.searching = this.subject.pipe(
      tap(_ =>this.loading =true),
      debounceTime(300),
      distinctUntilChanged(),
      concatMap((term) =>this.weatherService.getCityByApi(term)),
      tap(_ =>this.loading = false),


    )

     }

    // search$(){
    //  return this.searching = this.route.params.pipe(
    //    tap(_ =>this.loading = true),
    //     switchMap((term:Params) =>this.getCity(term['woeid'])),
    //     tap(_ =>this.loading = false)
    //   )
    // }


  search(text:string){
    this.subject.next(text)
  }






getCity(woeid:number){

 const data = this.weatherService.getAll().pipe(
   map((res) =>{
     return this.searching = this.weatherService.getLocationByWoeid(woeid).pipe(map((res) =>res))
   })
 )






  }








  findCityByGetCity(city:string){

    const data = this.weatherService.getAll().pipe(
      map((res) =>{
        return this.searching = this.weatherService.getCityByApi(city).pipe(map((res) =>res))
      })
    )



return data

  }
}

