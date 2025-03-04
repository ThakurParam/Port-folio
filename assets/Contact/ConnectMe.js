"use client";
import { ArrowOutward } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

export default function ConnectMe() {
  const [hover, setHover] = useState(false);

  return (
    <Box sx={{ mb: 3 }}>
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
            <Link href={"/contact"}>
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
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                {hover ? (
                  <ArrowOutward fontSize="large" />
                ) : (
                  <Typography
                    variant="body1"
                    width={"50%"}
                    textAlign={"center"}
                  >
                    Write Message
                  </Typography>
                )}
              </Box>
            </Link>
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
        <Link
          href="https://www.instagram.com/_dead_guruu_/"
          target="_blank"
          underline="none"
        >
          <Typography variant="p" className="typo">
            INSTAGRAM
          </Typography>
        </Link>
        <Link
          href="https://www.linkedin.com/in/paramjeet-singh-9328bb2a5/"
          target="_blank"
          underline="none"
        >
          <Typography variant="p" className="typo">
            LINKEDIN
          </Typography>
        </Link>
        <Typography variant="p" className="typo">
          TWITTER
        </Typography>
      </Box>
    </Box>
  );
}
