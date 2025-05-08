interface ICoord {
  lon: number;
  lat: number;
}

interface IWeatherInfo {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface ITemp {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface IWind {
  speed: number;
  deg: number;
  gust: number;
}

interface ICloud {
  all: number;
}

interface ICountry {
  country: string;
  sunrise: number;
  sunset: number;
}

export interface IWeather {
  id: number;
  coord: ICoord;
  weather: IWeatherInfo[];
  base: string;
  main: ITemp;
  visibility: number;
  wind: IWind;
  clouds: ICloud;
  dt: number;
  sys: ICountry;
  timezone: number;
  name: string;
  cod: number;
}
