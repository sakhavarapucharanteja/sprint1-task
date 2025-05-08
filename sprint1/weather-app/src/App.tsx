import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import Router from "./router/router";
import { store } from "./store/store";
import { theme } from "./theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router />
    </Provider>
  </ThemeProvider>
);

export default App;
