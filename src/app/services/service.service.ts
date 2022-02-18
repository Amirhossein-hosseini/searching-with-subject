import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable,forkJoin, of, concatMap, from } from 'rxjs';
import { weatherDto } from '../Dto/weatherDto.dto';
import { weathergetWoeid } from '../Dto/weathergetWoeid.st,';

@Injectable({
  providedIn: 'root'
})
export class weatherservice {

  constructor(private http:HttpClient) { }

  private url ='https://www.metaweather.com/api/location/search/'
  private url2 ='https://www.metaweather.com/api/location/'



  getCityByApi(query:string):Observable<weatherDto[]>{


    let params = new HttpParams()
    .set('query',query)
     .set('title','title')
     .set('larr_long','latt_long')



    return this.http.get<weatherDto[]>(this.url,{params})
  }

  getLocationByWoeid(woeid:number):Observable<weatherDto[]>{



    let params = new HttpParams()
    .set('woeid',woeid)
    .set('latt_long','latt_long')



    return this.http.get<weatherDto[]>(this.url2,{params})
  }


}


