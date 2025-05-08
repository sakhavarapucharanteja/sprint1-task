import Container from "@mui/material/Container";
import CityContainer from "../../components/City/CityContainer";

const WeatherPage: React.FC = () => {
  return (
    <Container sx={{ marginY: 5 }}>
      <CityContainer />
    </Container>
  );
};

export default WeatherPage;
