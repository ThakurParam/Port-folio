import Contact from "./Contact";
import Header from "@/components/HomePage/HeadBanner/Header";
import { Container } from "@mui/material";
import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <Container maxWidth="xl">
        <Header />
        {children}
        <Contact />
      </Container>
    </>
  );
}
