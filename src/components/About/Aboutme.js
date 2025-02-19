import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function Aboutme() {
  return (
    <>
      <Box mt={20}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" fontFamily={"Montserrat"}>
                About Me
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box>
                <Typography
                  variant="h4"
                  component={"h5"}
                  fontFamily={"Montserrat"}
                >
                  Hello, my name&apos;s Paramjeet Singh. I&apos;m a Bay
                  Area-born designer based in Northern Uttar Pradesh. I&apos;m
                  currently at Quantmhill as a designer creating connected
                  brands, commerce, product, and web experiences.
                </Typography>
                <Typography
                  variant="h4"
                  component={"h5"}
                  mt={2}
                  fontFamily={"Montserrat"}
                >
                  When I&apos;m not designing, I enjoy Travelling, top fragging
                  in Valorant, and continuing my quest to find the best fast
                  Food
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
