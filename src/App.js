import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { useState } from "react";
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
  const [filters, setFilters] = useState({});

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Header setFilters={setFilters} />
        <Main filters={filters} />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
