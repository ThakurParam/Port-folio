"use client";
import { Send } from "@mui/icons-material";
import { Box, Button, Grid, Input, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const validatePhone = (value) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(validateEmail(value) ? "" : "Email is not valid");
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    setPhoneError(validatePhone(value) ? "" : "Phone number is not valid");
  };
  return (
    <>
      <Box sx={{ mt: 4, p: 2 }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Montserrat",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Feel free to Connect{" "}
        </Typography>
        <Box sx={{ mt: 7 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <Typography variant="h6" sx={{ fontFamily: "Montserrat" }}>
                  Name
                </Typography>
                <Input
                  disableUnderline="true"
                  sx={{
                    borderBottom: "1px solid whiteSmoke",
                    width: "100%",
                    borderRadius: 3,
                    height: "40px",
                    color: "white",
                    paddingLeft: "15px",
                    // borderLeft: "1px solid whiteSmoke",
                  }}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <Typography variant="h6" sx={{ fontFamily: "Montserrat" }}>
                  Phone No.
                  <span style={{ fontSize: "12px", marginLeft: "5px" }}>
                    (whatsapp if possible)
                  </span>
                </Typography>
                <Input
                  value={phone}
                  onChange={handlePhoneChange}
                  disableUnderline="true"
                  sx={{
                    borderBottom: "1px solid whiteSmoke",
                    width: "100%",
                    borderRadius: 3,
                    height: "40px",
                    color: "white",
                    paddingLeft: "15px",
                  }}
                />
                {phoneError && (
                  <Typography
                    variant="caption"
                    color="error"
                    sx={{ fontFamily: "Montserrat" }}
                  >
                    {phoneError}
                  </Typography>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} mt={2}>
              <Stack spacing={1}>
                <Typography variant="h6" sx={{ fontFamily: "Montserrat" }}>
                  Email
                </Typography>
                <Input
                  value={email}
                  onChange={handleEmailChange}
                  disableUnderline="true"
                  sx={{
                    borderBottom: "1px solid whiteSmoke",
                    width: "100%",
                    borderRadius: 3,
                    height: "40px",
                    color: "white",
                    paddingLeft: "15px",
                  }}
                />
                {emailError && (
                  <Typography
                    variant="caption"
                    color="error"
                    sx={{ fontFamily: "Montserrat" }}
                  >
                    {emailError}
                  </Typography>
                )}
              </Stack>
            </Grid>
          </Grid>
          <Stack spacing={1} mt={4}>
            <Typography variant="h6" sx={{ fontFamily: "Montserrat" }}>
              Message
            </Typography>
            <Input
              disableUnderline="true"
              minRows={6}
              multiline
              sx={{
                border: "1px solid whiteSmoke",
                width: "100%",
                borderRadius: 3,
                color: "white",
                paddingLeft: "15px",
                // borderLeft: "1px solid whiteSmoke",
              }}
            />
          </Stack>
          <Box
            mt={7}
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                textTransform: "none",
                color: "white",
                border: "2px solid white",
                fontFamily: "Montserrat",
                borderRadius: 7,
                px: 5,
                py: 1,
                gap: 1,
                fontSize: "15px",
                "&:hover": {
                  bgcolor: "white",
                  color: "black",
                },
              }}
            >
              Send
              <Send
                sx={{ fontSize: "16px", transform: "rotate(-30deg)", mt: -0.5 }}
              />
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
