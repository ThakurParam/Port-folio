import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        ".button": {
          textTransform: "none",
          outline: "none",
          color: "white",
          border: "1px solid white",
          borderRadius: 8,
          fontSize: "12px",
          fontFamily: "Montserrat",
        },
        ".btn": {
          color: "whitesmoke",
          textTransform: "none",
          fontSize: "14px",
          mx: 4,
          borderRadius: 8,
          px: 2,
        },
      }}
    >
      <Typography
        variant="h5"
        component={"h5"}
        fontFamily={"Montserrat"}
        fontWeight={500}
      >
        Paramjeet S.
      </Typography>
      <Box>
        <Button className="btn">PROJECTS</Button>
        <Button className="btn">ABOUT</Button>
      </Box>
      <Button variant="outlined" className="button">
        Avialable for Work{" "}
      </Button>
    </Box>
  );
}
