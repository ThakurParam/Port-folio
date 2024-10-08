"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
    h1: {
      fontFamily: "Montserrat",
      // fontSize: "200px",
    },
    h2: {
      fontFamily: "Montserrat",
    },
    h3: {
      fontFamily: "Montserrat",
    },
    h4: {
      fontFamily: "Montserrat",
    },
    h5: {
      fontFamily: "Montserrat",
    },
    h6: {
      fontFamily: "Montserrat",
      // fontSize: "50px",
    },
    p: {
      fontFamily: "Montserrat",
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
