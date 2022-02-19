import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params, ParamMap } from '@angular/router';
import { map, Observable,forkJoin, of, concatMap, from, switchMap, mergeMap } from 'rxjs';
import { weatherDto } from '../Dto/weatherDto.dto';
import { weathergetWoeid } from '../Dto/weathergetWoeid.st,';

@Injectable({
  providedIn: 'root'
})
export class weatherservice {

  constructor(private http:HttpClient) { }

  private url ='https://www.metaweather.com/api/location/search/'
private url2 = 'https://www.metaweather.com/api/location/'


  getCityByApi(query:string):Observable<any[]>{

    let params = new HttpParams()
    .set('query',query)


    return this.http.get<any>(this.url,{params})
  }

  getLocationByWoeid(woeid:number):Observable<weatherDto[]>{

    // let headers = new Headers()
    // headers.append('Content-Type', 'application/json');
    // headers.append('projectid', );


    return this.http.get<weatherDto[]>(`https://www.metaweather.com/api/location/${woeid}/` )



}

public getAll():Observable<any[]>{
  let call1 = this.http.get(this.url)
  let call2 = this.http.get(this.url2)

  return forkJoin ([call1,call2])
}


}
