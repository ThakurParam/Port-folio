import React from "react";
import Main from "./HomePage/HeadBanner/Main";
import { Box } from "@mui/material";
import MainFile from "./HomePage/IntroBanner/MainFile";
import Capabilities from "./HomePage/Capabilities";
import Contact from "./HomePage/Contact";

export default function Portfolio() {
  return (
    <Box sx={{ p: 4 }}>
      <Main />
      <MainFile />
      <Capabilities />
      <Contact />
    </Box>
  );
}
