import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: { md: 2, xs: 0 },
        py: { md: 0, xs: 2 },
        // position: "sticky",
        ".button": {
          textTransform: "none",
          outline: "none",
          color: "white",
          border: "2px solid white",
          borderRadius: 8,
          fontSize: { md: "12px", xs: "7px" },
          fontFamily: "Montserrat",
        },
        ".btn": {
          color: "whitesmoke",
          textTransform: "none",
          fontSize: { md: "14px", xs: "10px" },
          mx: { md: 4, xs: 0 },
          borderRadius: 8,
          px: { md: 2, xs: 1 },
        },
        ".name": {
          fontSize: { md: "30px", xs: "15px" },
        },
      }}
    >
      <Typography
        variant="p"
        component={"p"}
        fontFamily={"Montserrat"}
        fontWeight={500}
        className="name"
      >
        Paramjeet S.
      </Typography>
      <Box display={"flex"} alignItems={"center"}>
        <Link href={"/my-projects"}>
          <Button className="btn">PROJECTS</Button>
        </Link>
        <Link href={"/about"}>
          <Button className="btn">ABOUT</Button>
        </Link>
      </Box>
      <Button variant="outlined" className="button">
        Avialable for Work{" "}
      </Button>
    </Box>
  );
}
