import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams } from "react-router-dom";
import React from "react";
import { weatherApi } from "../../services/WeatherService";
import Weather from "../../components/Weather/Weather";

interface WeatherDetailsParams {
  city: string;
}

const WeatherDetails: React.FC = () => {
  const { city } = useParams<WeatherDetailsParams>();
  const { data } = weatherApi.useGetWeatherByCityNameQuery(city);

  if (!data) {
    return <CircularProgress />;
  }

  return (
    <Container sx={{ marginY: 5 }}>
      <Weather data={data} />
    </Container>
  );
};

export default WeatherDetails;
