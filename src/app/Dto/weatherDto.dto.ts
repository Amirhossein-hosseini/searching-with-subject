export class weatherDto{
  // title?:string
  // location_type?:string
  // latt_long?:string
  // woeid?:number
  // distance?:string
  // weather_state_name?:string
  // weather_state_abbr?:string

  constructor(
    public title:string,
    public location_type:string,
    public latt_long :string,

    public woeid:number,
    public distance:string,
    public weather_state_name:string,
    public weather_state_abbr:string,
    public id :string
  ){}
  // applicable_date?:string
}
