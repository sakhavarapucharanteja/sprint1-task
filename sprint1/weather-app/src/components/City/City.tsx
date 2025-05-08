import React from "react";
import { useHistory } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CardActionArea, CardActions, IconButton, Tooltip } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import CloseIcon from "@mui/icons-material/Close";
import UpdateIcon from "@mui/icons-material/Update";
import { weatherApi } from "../../services/WeatherService";

interface CityProps {
  id: number;
  cityName: string;
  removeCity: (id: number) => void;
}

const City: React.FC<CityProps> = ({ id, cityName, removeCity }) => {
  const {
    data: weather,
    error,
    refetch,
    isFetching,
  } = weatherApi.useGetWeatherByCityNameQuery(cityName);
  const history = useHistory();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card elevation={2}>
        <CardActionArea disableRipple onClick={() => history.push(`/weather/${cityName}`)}>
          <Box padding={3} sx={{ minHeight: 280 }}>
            <Typography align="center" component="h2" variant="h6">
              {cityName}
            </Typography>
            {isFetching && (
              <CircularProgress
                sx={{
                  position: "absolute",
                  left: "45%",
                  top: "47%",
                }}
              />
            )}
            {!isFetching && error && <Typography align="center">Something went wrong</Typography>}
            {!isFetching && weather && (
              <>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Typography variant="h4">
                    {weather.main.temp > 0
                      ? `+${weather.main.temp.toFixed()}`
                      : `${weather.main.temp.toFixed()}`}
                    &deg;
                  </Typography>
                  <Box
                    component="img"
                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  />
                  <Typography>{weather.weather[0].description}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography>Feels like, &deg;</Typography>
                  <Typography>{weather.main.feels_like}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography>Wind, m/s</Typography>
                  <Typography>{weather.wind.speed}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography>Pressure, hPa</Typography>
                  <Typography>{weather.main.pressure}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography>Humidity, %</Typography>
                  <Typography>{weather.main.humidity}</Typography>
                </Box>
              </>
            )}
          </Box>
        </CardActionArea>
        <CardActions>
          <Box sx={{ flex: 1 }} display="flex" justifyContent="center">
            <Tooltip title="Update weather data">
              <IconButton aria-label="Update weather data" onClick={() => refetch()} size="small">
                <UpdateIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Remove city from list">
              <IconButton aria-label="remove city" onClick={() => removeCity(id)} size="small">
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default City;
