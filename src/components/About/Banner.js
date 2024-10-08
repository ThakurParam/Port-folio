import { Box, Typography } from "@mui/material";
import React from "react";

export default function Banner() {
  return (
    <>
      <Box sx={{ height: 700, bgcolor: "black", position: "relative", my: 7 }}>
        <img
          alt="img"
          src="/myimage3.jpg"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
          }}
        />
        <Box width={"26%"}>
          <Typography variant="p" sx={{ wordSpacing: "-2px" }}>
            THE DESIGNER'S ROLE IS LIKE A CONSIDERATE HOST WHO ANTICIPATES THEIR
            GUEST'S NEEDS.
          </Typography>
        </Box>
        <Typography
          variant="p"
          sx={{
            fontSize: "150px",
            fontWeight: 500,
            fontFamily: "Roboto",
            position: "absolute",
            bottom: -120,
            left: "50%",
          }}
        >
          PARAM
        </Typography>
      </Box>
    </>
  );
}
