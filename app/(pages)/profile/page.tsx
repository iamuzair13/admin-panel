"use client";

import BasicInfo from "@/app/components/profile/basicInfo";
import Emergency from "@/app/components/profile/emergency";
import Settings from "@/app/components/profile/settings";
import Vahicle from "@/app/components/profile/vahicle";
import { lightTheme } from "@/app/theme/theme";

import { Button, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import * as React from "react";
import { BiError } from "react-icons/bi";
import { FaPhoneAlt, FaRegEdit } from "react-icons/fa";
import {
  IoCarOutline,
  IoColorPaletteOutline,
  IoPersonOutline,
} from "react-icons/io5";

export default function Profile() {
  const [error, setError] = React.useState(false);
  const [adminInfo, setAdminInfo] = React.useState("basic");

  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:900px)");

  const overview = [
    {
      text: "Basic Info",
      icon: <IoPersonOutline />,
      click: "basic",
    },
    {
      text: "Vehicle",
      icon: <FaPhoneAlt />,
      click: "vahicle",
    },
    {
      text: "Emergency",
      icon: <IoCarOutline />,
      click: "emergency",
    },
    {
      text: "Settings",
      icon: <IoColorPaletteOutline />,
      click: "settings",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          width: { xs: "100%", sm: "90%", md: "70%", lg: "60%" },
        }}
      >
        {/* /////////////////// Profile Header /////////////////// */}
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: "20px",
              alignItems: { xs: "flex-start", sm: "center" },
              justifyContent: "space-between",
            }}
          >
            {/* Profile Image + Info */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                width: { xs: "100%", sm: "auto" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: lightTheme.palette.custom.background.orange,
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              >
                {!error ? (
                  <Image
                    src="/profile.png"
                    alt="AU"
                    width={200}
                    height={200}
                    onError={() => setError(true)}
                  />
                ) : (
                  <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                    AU
                  </span>
                )}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Typography
                  sx={{
                    color: lightTheme.palette.custom.darkBlue,
                    fontFamily: "system-ui",
                    fontSize: "24px",
                    fontWeight: "700",
                    lineHeight: "28px",
                  }}
                >
                  Admin Name
                </Typography>
                <Typography
                  sx={{
                    color: lightTheme.palette.custom.gray,
                    fontFamily: "system-ui",
                    fontSize: "12px",
                  }}
                >
                  admin@gmail.com
                </Typography>
                <Typography
                  sx={{
                    color: lightTheme.palette.custom.gray,
                    fontFamily: "system-ui",
                    fontSize: "12px",
                    backgroundColor:
                      lightTheme.palette.custom.background.lightGreen,
                    width: "fit-content",
                    borderRadius: "10px",
                    padding: "2px 5px",
                  }}
                >
                  Admin
                </Typography>
              </Box>
            </Box>

            {/* Edit Button */}
            <Box sx={{ alignSelf: { xs: "flex-end", sm: "center" } }}>
              <Button
                sx={{
                  backgroundColor: lightTheme.palette.custom.orange,
                  color: lightTheme.palette.background.default,
                  display: "flex",
                  gap: "5px",
                  fontSize: "12px",
                  px: 2,
                  py: 1,
                }}
              >
                <FaRegEdit />
                Edit Profile
              </Button>
            </Box>
          </Box>
        </Box>

        {/* /////////////////// Insurance Alert /////////////////// */}
        <Box
          sx={{
            backgroundColor: lightTheme.palette.background.default,
            border: `1px solid ${lightTheme.palette.custom.iceBlue}`,
            borderRadius: "10px",
            padding: "10px 20px",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
              color: lightTheme.palette.custom.red,
              fontSize: { xs: "12px", sm: "14px" },
            }}
          >
            <BiError />
            Insurance Expires on
          </Typography>
        </Box>

        {/* /////////////////// Overview Cards /////////////////// */}
        <Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "15px",
            }}
          >
            {overview.map((item, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: lightTheme.palette.background.default,
                  flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 22%" },
                  borderRadius: "10px",
                  padding: "10px 20px",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setAdminInfo(item.click);
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Box>{item.icon}</Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "500",
                      lineHeight: "20px",
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* /////////////////// Dynamic Section /////////////////// */}
        <Box
          sx={{
            backgroundColor: lightTheme.palette.background.default,
            width: "100%",
            borderRadius: "10px",
            padding: "10px 20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {adminInfo == "basic" && <BasicInfo />}
          {adminInfo == "vahicle" && <Vahicle />}
          {adminInfo == "emergency" && <Emergency />}
          {adminInfo == "settings" && <Settings />}
        </Box>
      </Box>
    </Box>
  );
}
