import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { dot } from "./cssSkillls";

export default function Skills() {
  const skill = [
    { name: "ReactJs" },
    { name: "NextJs" },
    { name: "TypeScript" },
    { name: "javasript" },
    { name: "Css5" },
    { name: "GSAP" },
    { name: "Material UI" },
    { name: "Tailwind" },
    { name: "BootStrap" },
    { name: "Framer Motion" },
    { name: "Aos" },
  ];
  return (
    <Container maxWidth="xl" sx={{ mt: 20, height: 300 }}>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontFamily: "Montserrat" }}>
              Skills
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                width: "100%",
                justifyContent: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography variant="h5" sx={{ fontFamily: "Montserrat" }}>
                  ReactJs
                </Typography>
                <Box sx={dot} />
                <Typography variant="h5" sx={{ fontFamily: "Montserrat" }}>
                  NextJs
                </Typography>
                <Box sx={dot} />{" "}
                <Typography variant="h5" sx={{ fontFamily: "Montserrat" }}>
                  TypeScript
                </Typography>
                <Box sx={dot} />{" "}
                <Typography variant="h5" sx={{ fontFamily: "Montserrat" }}>
                  javasript
                </Typography>
                <Box sx={dot} />{" "}
                <Typography variant="h5" sx={{ fontFamily: "Montserrat" }}>
                  Css5
                </Typography>
                <Box sx={dot} />{" "}
                <Typography variant="h5" sx={{ fontFamily: "Montserrat" }}>
                  GSAP
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                width: "100%",
                justifyContent: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography variant="h5" sx={{ fontFamily: "Montserrat" }}>
                  Tailwind
                </Typography>
                <Box sx={dot} />
                <Typography variant="h5" sx={{ fontFamily: "Montserrat" }}>
                  BootStrap
                </Typography>
                <Box sx={dot} />{" "}
                <Typography variant="h5" sx={{ fontFamily: "Montserrat" }}>
                  Aos
                </Typography>
                <Box sx={dot} />{" "}
                <Typography variant="h5" sx={{ fontFamily: "Montserrat" }}>
                  React Vite
                </Typography>
                <Box sx={dot} />{" "}
                <Typography variant="h5" sx={{ fontFamily: "Montserrat" }}>
                  Material UI
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
