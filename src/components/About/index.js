import React from "react";
import Banner from "./Banner";
import Header from "../HomePage/HeadBanner/Header";

import Aboutme from "./Aboutme";
import Skills from "./Skills";
import Foot from "./Foot";

export default function About() {
  return (
    <>
      <Header />
      <Banner />
      <Aboutme />
      <Skills />
      <Foot />
    </>
  );
}
