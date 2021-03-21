import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Header from "./components/Header";
import Main from "./components/Main";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#9412dc",
    },
  },
});

function App() {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Header />
        <Main />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
