import React from "react";
import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { IWeather } from "../../types/IWeather";
import { getDateByUnixTimestamp } from "../../utils/getDateByUnixTimestamp";

interface WeatherProps {
  data: IWeather;
}

const Weather: React.FC<WeatherProps> = ({ data }) => {
  return (
    <Paper elevation={3}>
      <Box padding={3}>
        <Typography align="center" component="h1" variant="h2">
          {data.name}
        </Typography>
        <Typography align="center" component="p" variant="h6">
          {getDateByUnixTimestamp(data.dt)}
        </Typography>
        <Box marginTop={4}>
          <Typography align="center" component="h2" variant="h5">
            Main
          </Typography>
          <Box paddingX={3}>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6">Temp</Typography>
              <Typography variant="h6">
                {data.main.temp > 0
                  ? `+${data.main.temp.toFixed()}`
                  : `${data.main.temp.toFixed()}`}
                &deg;C
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6">Feels like</Typography>
              <Typography variant="h6">
                {data.main.feels_like > 0
                  ? `+${data.main.feels_like.toFixed()}`
                  : `${data.main.feels_like.toFixed()}`}
                &deg;C
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6">Pressure</Typography>
              <Typography variant="h6">{data.main.pressure}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default Weather;
