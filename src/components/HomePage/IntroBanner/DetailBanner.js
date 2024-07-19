"use client";
import { Box, Grid, keyframes, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function DetailBanner() {
  const moveText = keyframes`
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  `;

  return (
    <Box my={7} position={"relative"}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              pt: "20%",
              ".typo-sub": {
                fontSize: "15px",
                lineHeight: "10px",
              },
            }}
          >
            <Typography variant="p" className="typo-sub">
              HELLO,MY NAME IS PARAMJEET SINGH,I AM A FRONT-END DEVELOPER AT
              QUANTMHILL WHERE I CREATE PRODUCTS,WEBSITES,AND BRANDS.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: 700,
              borderRadius: "40px",
              overflow: "hidden",
            }}
          >
            <Image
              alt="my-profile"
              layout="fill"
              objectFit="cover"
              src="/myimage3.jpg"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <Box
              sx={{
                height: 120,
                width: 120,
                border: "2px solid white",
                borderRadius: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                my: "60%",
                mx: "20%",
              }}
            >
              <Stack>
                <Typography variant="p" fontSize={"14px"}>
                  LEARN{" "}
                </Typography>
                <Typography variant="p" fontSize={"14px"} ml={2}>
                  {" "}
                  MORE
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          position: "absolute",
          bottom: -80,
          left: 0,
          width: "100%",
          height: "150px",
          overflow: "hidden",
          zIndex: 1000,
        }}
      >
        <Typography
          variant="h1"
          className="name-typo"
          sx={{
            position: "absolute",
            animation: `${moveText} 10s linear infinite`,
            fontSize: "150px",
            fontWeight: 500,
            fontFamily: "Roboto",
            whiteSpace: "nowrap",
          }}
        >
          PARAMJEET - SINGH
        </Typography>
      </Box>
    </Box>
  );
}
