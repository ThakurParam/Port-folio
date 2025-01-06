import React from "react";
import Header from "../HomePage/HeadBanner/Header";
import ProjectSwiper from "./ProjectSwiper";
import { Container } from "@mui/material";

export default function Projects() {
  return (
    <div>
      <Container maxWidth="xl">
        <Header />
        <ProjectSwiper />
      </Container>
    </div>
  );
}
