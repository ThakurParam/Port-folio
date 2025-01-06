"use client";
import { Box, Container, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "../Project/style.css";

import { Autoplay, Pagination } from "swiper/modules";
import { LaunchOutlined } from "@mui/icons-material";
import Link from "next/link";
const Data = [
  {
    img: "/1.png",
    tittle: "Let's Trip",
    description:
      "Lets Trip takes the stress out of planning, allowing you to focus on what truly matters—making memories. Experience the future of travel with Lets Trip,",
    link: "https://www.letstrip.world/",
  },
  {
    img: "/2.png",
    tittle: "Siripay",
    description:
      "SiriPay is an online platform that makes it easy to purchase coupons and gift cards for you and your loved ones. It serves as a one-stop-shop for rewards,",
    link: "https://www.siripay.co/",
  },
  {
    img: "/3.png",
    tittle: "PEE-AAR",
    description:
      "Lets Trip takes the stress out of planning, allowing you to focus on what truly matters—making memories. Experience the future of travel with Lets Trip,",
    link: "https://www.peeaarr.com/",
  },
  {
    img: "/3.png",
    tittle: "Raju666",
    description:
      "Lets Trip takes the stress out of planning, allowing you to focus on what truly matters—making memories. Experience the future of travel with Lets Trip,",
    link: "https://www.raju666.com/",
  },
  {
    img: "/3.png",
    tittle: "PPLACD",
    description:
      "Lets Trip takes the stress out of planning, allowing you to focus on what truly matters—making memories. Experience the future of travel with Lets Trip,",
    link: "https://staging.girnarsoft.com/",
  },
];
export default function ProjectSwiper() {
  return (
    <>
      <Box sx={{ p: { md: 2, xs: 0 }, py: { md: 0, xs: 2 }, mt: 7 }}>
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {Data?.map((item, index) => (
            <SwiperSlide className="slide" key={index}>
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  width: "100%",
                  borderRadius: "50px",
                  overflow: "hidden",
                  "&:hover .overlay": {
                    transform: "translateY(0)",
                  },
                }}
              >
                <img
                  src={item?.img}
                  alt="Project"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />

                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                    background: "rgba(0, 0, 0, 0.6)",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    transform: "translateY(100%)",
                    transition: "transform 0.5s ease",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <Typography
                      variant="h4"
                      sx={{ fontFamily: "Montserrat", fontWeight: 600 }}
                    >
                      {item?.tittle}{" "}
                    </Typography>{" "}
                    <Link target="_blank" href={item?.link || "/"}>
                      <LaunchOutlined sx={{ cursor: "pointer" }} />
                    </Link>
                  </Box>

                  <Typography
                    variant="p"
                    sx={{ fontFamily: "Montserrat", maxWidth: "700px", mt: 2 }}
                  >
                    {item?.description}{" "}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}
