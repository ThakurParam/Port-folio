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
              fontSize: "120px",
              lineHeight: "100px",
            },
            ".typo-sub": {
              position: "absolute",
              right: 50,
              bottom: 5,
              fontSize: "15px",
              lineHeight: "20px",
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
            width={"24%"}
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
