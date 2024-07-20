import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export default function ConnectMe() {
  return (
    <Box>
      <Box
        sx={{
          height: 600,
          borderRadius: 12,
          border: "1px solid #8A8A8A",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 14,
          mb: 2,
        }}
      >
        <Box
          sx={{
            ".typo-subheading": {
              fontWeight: 600,
              fontFamily: "Montserrat",
              // maxWidth: "10%",
              fontSize: { md: "25px", xs: "13px" },
              textAlign: "center",
              zIndex: 10,
              lineHeight: "20px",
            },
            ".heading": {
              fontWeight: 600,
              fontFamily: "Montserrat",
              // maxWidth: "40%",
              fontSize: { md: "80px", xs: "30px" },
              textAlign: "center",
              zIndex: 10,
            },
          }}
        >
          <Stack>
            <Typography variant="p" className="typo-subheading">
              THOUGHT TO HIRE ME ?
            </Typography>

            <Typography variant="p" className="heading">
              LET US CONNECT !{" "}
            </Typography>
            <Box
              sx={{
                height: 120,
                width: 120,
                borderRadius: 50,
                border: "1px solid #8A8A8A",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mx: "auto",
                mt: 4,
              }}
            >
              <Typography variant="p" width={"50%"} textAlign={"center"}>
                Write Message
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          ".typo": {
            fontWeight: 600,
            fontFamily: "Montserrat",
            fontSize: { md: "14px", xs: "10px" },
          },
        }}
      >
        <Typography
          variant="p"
          className="typo"
          display={{ md: "flex", xs: "none" }}
        >
          FEEL FREE TO CONNECT ME ON SOCIAL MEDIA
        </Typography>
        <Typography variant="p" className="typo">
          INSTAGRAM
        </Typography>
        <Typography variant="p" className="typo">
          LINKEDIN
        </Typography>
        <Typography variant="p" className="typo">
          TWITTER
        </Typography>
      </Box>
    </Box>
  );
}
