import { ArrowDownward } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function Banner() {
  return (
    <>
      <Box sx={{ my: 7 }}>
        <Box
          sx={{
            position: "relative",
            ".typo": {
              textAlign: "center",
              mx: "auto",
              fontWeight: 600,
              fontSize: { md: "120px", xs: "40px" },
              lineHeight: { md: "100px", xs: "40px" },
            },
            ".typo-sub": {
              position: { md: "absolute", xs: "initial" },
              right: 50,
              bottom: 5,
              fontSize: { md: "15px", xs: "10px" },
              lineHeight: { md: "20px", xs: "12px" },
              textAlign: { md: "initial", xs: "center" },
            },
          }}
        >
          <Typography variant="h1" component={"h1"} className="typo">
            MULTI-
          </Typography>
          <Typography variant="h1" component={"h1"} className="typo">
            DISCIPLINARY
          </Typography>
          <Typography variant="h1" component={"h1"} className="typo">
            DESIGNER
          </Typography>
          <Typography
            variant="p"
            component={"p"}
            width={{ md: "24%", xs: "100%" }}
            className="typo-sub"
          >
            CREATIVE THINKING AND PROBLEM SOLVING ARE WHERE MY MIND
            WONDERS.USING MY KNOWLEDGE AND PASSION FOR DESIGNS AS MY MEDIUM
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            my: 7,
          }}
        >
          <Box
            sx={{
              height: 100,
              width: 100,
              border: "2px solid lightgrey",
              borderRadius: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ArrowDownward sx={{ fontSize: "40px" }} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
