"use client";
import { ArrowOutward } from "@mui/icons-material";
import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Foot() {
  const [hover, setHover] = useState(false);

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          mt: 20,
          height: 500,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack>
            <Typography variant="h5" textAlign={"center"}>
              {" "}
              Got a Project in Mind?
            </Typography>
            <Typography variant="h1"> Let&apos;s Connect</Typography>
            <Box
              sx={{
                height: 120,
                width: 120,
                borderRadius: 50,
                border: "1px solid #8A8A8A",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mx: "auto",
                mt: 4,
              }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {hover ? (
                <ArrowOutward fontSize="large" />
              ) : (
                <Typography variant="body1" width={"50%"} textAlign={"center"}>
                  Write Message
                </Typography>
              )}
            </Box>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
