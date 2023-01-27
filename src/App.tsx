import Navbar from "./components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Content from "./components/Content";
import { Box } from "@mui/system";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: theme as any,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box className="App" sx={{ position: "relative", zIndex: 1 }}>
        <Navbar setTheme={setTheme} />
        <Content />
      </Box>
    </ThemeProvider>
  );
}

export default App;
