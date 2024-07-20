import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";

export default function IntroBanner() {
  return (
    <Box my={7}>
      <Divider sx={{ bgcolor: "whitesmoke", my: 7 }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          my: 7,
          ".btn": {
            color: "whitesmoke",
            textTransform: "none",
            fontSize: { md: "14px", xs: "10px" },
            mx: { md: 4, xs: 0 },
            borderRadius: 8,
            px: 2,
          },
          ".btn-contact": {
            color: "whitesmoke",
            textTransform: "none",
            fontSize: { md: "14px", xs: "10px" },
          },
        }}
      >
        <Button variant="p" className="btn">
          ABOUT
        </Button>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button className="btn-contact">LINKEDIN</Button>/
          <Button className="btn-contact">INSTAGRAM</Button>/
          <Button className="btn-contact">TWITTER</Button>/
          <Button className="btn-contact">EMAIL</Button>
        </Box>
      </Box>
    </Box>
  );
}
