import React from "react";
import Main from "./HomePage/HeadBanner/Main";
import { Box, Container } from "@mui/material";
import MainFile from "./HomePage/IntroBanner/MainFile";
import Capabilities from "./HomePage/Capabilities";
import Contact from "./HomePage/Contact";

export default function Portfolio() {
  return (
    <Box>
      <Container maxWidth="xl">
        <Main />
        <MainFile />
        <Capabilities />
        <Contact />
      </Container>
    </Box>
  );
}
