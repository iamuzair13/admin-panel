"use client"

import BasicInfo from "@/app/components/profile/basicInfo";
import Emergency from "@/app/components/profile/emergency";
import Vahicle from "@/app/components/profile/vahicle";
import { lightTheme } from "@/app/theme/theme";

import { Button, Typography } from "@mui/material";
import { Box, width } from "@mui/system";
import Image from "next/image";
import * as React from "react";
import { BiError } from "react-icons/bi";
import { FaPhoneAlt, FaRegEdit } from "react-icons/fa";
import { IoCarOutline, IoColorPaletteOutline, IoPersonOutline } from "react-icons/io5";

export default function Profile() {
  const [error, setError] = React.useState(false);

  const[adminInfo, setAdminInfo] = React.useState("basic")

 const overview = [
   {
     text: "Basic Info",
     icon: <IoPersonOutline  />,
     click : "basic"
   },
   {
     text: "Vehicle",
     icon: <FaPhoneAlt  />,
     click: "vahicle"
   },
   {
     text: "Emergency",
     icon: <IoCarOutline  />,
     click : "emergency"
   },
   {
     text: "Settings",
     icon: (
       <IoColorPaletteOutline  />
     ),
     click:"settings"
   },
 ]; 
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          width: "60%",
        }}
      >
        {/* /////////////////////////////////////////// */}
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              color: lightTheme.palette.custom.white,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "10px",
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
                }}
              >
                {!error ? (
                  <Image
                    src="/profile.png" // your image
                    alt="AU"
                    width={200}
                    height={200}
                    onError={() => setError(true)} // if image fails
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
                    fontSize: "30px",
                    fontWeight: "700",
                    lineHeight: "36px",
                  }}
                  variant="h2"
                >
                  Admin Name
                </Typography>
                <Typography
                  sx={{
                    color: lightTheme.palette.custom.gray,
                    fontFamily: "system-ui",
                    fontSize: "12px",
                  }}
                  variant="h4"
                >
                  admin@gmail.com
                </Typography>
                <Typography
                  sx={{
                    color: lightTheme.palette.custom.gray,
                    fontFamily: "system-ui",
                    fontSize: "12px",
                    backgroundColor: lightTheme.palette.custom.background.lightGreen,
                    width: "60px",
                    borderRadius: "10px",
                    padding: "2px 5px",
                  }}
                  variant="h4"
                >
                  Admin
                </Typography>
              </Box>
            </Box>

            <Box>
              <Button
                sx={{
                  backgroundColor: lightTheme.palette.custom.orange,
                  color: lightTheme.palette.background.default,
                  display: "flex",
                  gap: "5px",
                }}
              >
                <FaRegEdit />
                Edit Profile
              </Button>
            </Box>
          </Box>
        </Box>
        {/* /////////////////////////////////////////// */}
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
            }}
          >
            <BiError />
            Insurance Expires on
          </Typography>
        </Box>

        {/* /////////////////////////////////////////// */}

        <Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            {overview.map((item, index) => {
              return (
                <>
                  <Box
                    key={index}
                    sx={{
                      backgroundColor: lightTheme.palette.background.default,
                      width: "22%",
                      borderRadius: "10px",
                      padding: "10px 20px",
                      gap: "15px",
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
                        variant="h4"
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
                </>
              );
            })}
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: lightTheme.palette.background.default,
            width: "100%",
            borderRadius: "10px",
            padding: "10px 20px",
            gap: "15px",
            display: "flex",
            flexDirection: "column",
            cursor: "pointer",
          }}
        >
          {adminInfo == "basic" && <BasicInfo />}
          {adminInfo == "vahicle" && <Vahicle/>}
          {adminInfo == "emergency" && <Emergency/>}
          {adminInfo == "settings" && <Typography>settings</Typography>}
        </Box>
      </Box>
    </Box>
  );
}
