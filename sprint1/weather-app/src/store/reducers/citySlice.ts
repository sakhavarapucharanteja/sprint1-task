import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICity } from "../../types/ICity";

interface CityState {
  cities: ICity[];
}

const initialState: CityState = {
  cities: JSON.parse(localStorage.getItem("cities") || "[]"),
};

const citiesSlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    addCity(state, action: PayloadAction<ICity>) {
      state.cities.push(action.payload);
    },
    removeCity(state, action: PayloadAction<number>) {
      state.cities = state.cities.filter((city) => city.id !== action.payload);
    },
  },
});

export const { addCity, removeCity } = citiesSlice.actions;
export default citiesSlice.reducer;
