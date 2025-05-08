import Grid from "@mui/material/Grid";
import { useCallback } from "react";
import { ICity } from "../../types/ICity";
import City from "./City";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { addCity, removeCity } from "../../store/reducers/citySlice";
import AddCityForm from "../AddCityForm/AddCityForm";

const CityContainer = () => {
  const { cities } = useAppSelector((state) => state.cityReducer);
  const dispatch = useAppDispatch();

  const handleAddCity = (cityName: string) => {
    dispatch(addCity({ id: Math.random(), cityName }));
  };

  const handleRemoveCity = useCallback(
    (id: number) => {
      dispatch(removeCity(id));
    },
    [dispatch]
  );

  return (
    <>
      <AddCityForm handleAddCity={handleAddCity} />
      <Grid container spacing={3} marginY={1}>
        {cities.map((city: ICity) => (
          <City key={city.id} id={city.id} cityName={city.cityName} removeCity={handleRemoveCity} />
        ))}
      </Grid>
    </>
  );
};

export default CityContainer;
