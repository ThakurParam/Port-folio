import React from "react";
import Banner from "./Banner";
import Header from "../HomePage/HeadBanner/Header";

import Aboutme from "./Aboutme";
import Skills from "./Skills";
import Foot from "./Foot";
import { Container } from "@mui/material";

export default function About() {
  return (
    <>
      <Container maxWidth="xl">
        <Header />
        <Banner />
        <Aboutme />
        <Skills />
        <Foot />
      </Container>
    </>
  );
}
