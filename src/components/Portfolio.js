import React from "react";
import Main from "./HomePage/HeadBanner/Main";
import { Box, Container } from "@mui/material";
import MainFile from "./HomePage/IntroBanner/MainFile";
import Capabilities from "./HomePage/Capabilities";
import Contact from "../../assets/Contact";
import Layout from "../../assets/Layout";

export default function Portfolio() {
  return (
    <Box>
      {/* <Container maxWidth="xl"> */}
      <Layout>
        <Main />
        <MainFile />
        <Capabilities />
      </Layout>
      {/* </Container> */}
    </Box>
  );
}
