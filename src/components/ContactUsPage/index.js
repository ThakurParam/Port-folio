import { Box, Container } from "@mui/material";
import React from "react";
import Header from "../HomePage/HeadBanner/Header";
import Form from "./Form";

export default function ContactUsPage() {
  return (
    <>
      <Box>
        <Container maxWidth="xl">
          <Header />
          <Form />
        </Container>
      </Box>
    </>
  );
}
