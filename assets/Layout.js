"use client";
import Header from "@/src/components/HomePage/HeadBanner/Header";
import Contact from "./Contact";
import { Container } from "@mui/material";
import React, { useEffect } from "react";

export default function Layout({ children }) {
  // useEffect(() => {
  //   let scrollTimeout;

  //   const smoothScroll = (event) => {
  //     clearTimeout(scrollTimeout);
  //     scrollTimeout = setTimeout(() => {
  //       window.scrollBy({
  //         top: event.deltaY,
  //         behavior: "smooth",
  //       });
  //     }, 0);
  //   };

  //   window.addEventListener("wheel", smoothScroll);

  //   return () => {
  //     window.removeEventListener("wheel", smoothScroll);
  //     clearTimeout(scrollTimeout);
  //   };
  // }, []);

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
