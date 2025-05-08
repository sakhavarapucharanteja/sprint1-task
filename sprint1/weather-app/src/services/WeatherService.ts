import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IWeather } from "../types/IWeather";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.openweathermap.org/" }),
  endpoints: (builder) => ({
    getWeatherByCityName: builder.query<IWeather, string>({
      query: (cityName: string) => ({
        url: "data/2.5/weather",
        params: {
          q: cityName,
          appid: "577a4137032831e1e0e130e483c9edae",
          units: "metric",
        },
      }),
    }),
  }),
});
