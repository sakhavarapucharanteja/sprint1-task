import { combineReducers, configureStore, Middleware } from "@reduxjs/toolkit";
import cityReducer, { addCity, removeCity } from "./reducers/citySlice";
import { ICity } from "../types/ICity";
import { weatherApi } from "../services/WeatherService";

const rootReducer = combineReducers({ cityReducer, [weatherApi.reducerPath]: weatherApi.reducer });

const cityMiddleware: Middleware<{}, RootState> = (prevState) => (dispatch) => (action) => {
  const { cities } = prevState.getState().cityReducer;

  if (addCity.match(action)) {
    const updatedCities = [...cities, action.payload];
    localStorage.setItem("cities", JSON.stringify(updatedCities));
  }

  if (removeCity.match(action)) {
    const updatedCities = [...cities].filter((city: ICity) => city.id !== action.payload);
    localStorage.setItem("cities", JSON.stringify(updatedCities));
  }

  return dispatch(action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cityMiddleware, weatherApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
