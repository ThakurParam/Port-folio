import React from "react";
import Header from "../HomePage/HeadBanner/Header";
import ProjectSwiper from "./ProjectSwiper";
import { Container } from "@mui/material";
import Layout from "@/assets/Layout";

export default function Projects() {
  return (
    <div>
      <Layout>
        <ProjectSwiper />
      </Layout>
    </div>
  );
}
