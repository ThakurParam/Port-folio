import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function Skills() {
  return (
    <Container maxWidth="xl">
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5">Skills</Typography>
          </Grid>
          <Grid item xs={12} md={12}></Grid>
        </Grid>
      </Box>
    </Container>
  );
}
