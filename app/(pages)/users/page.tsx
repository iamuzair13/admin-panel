'use client'

import { Box, Button, Icon, Typography } from "@mui/material";
import { IoCarOutline, IoCarSportOutline, IoColorPaletteOutline, IoPersonOutline } from "react-icons/io5";
import { IoIosTrendingUp, IoMdAdd, IoMdPersonAdd } from "react-icons/io";
import { IoIosTrendingDown } from "react-icons/io";
import { LuDollarSign } from "react-icons/lu";
import { FaCalendarAlt, FaPhoneAlt, FaRegEdit } from "react-icons/fa";
import { FaArrowRightLong, FaLocationArrow } from "react-icons/fa6";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { lightTheme } from "@/app/theme/theme";
import { BsDownload } from "react-icons/bs";
import CustomizedMenus from "@/app/components/dropdown";
import Dropdown from "@/app/components/dropdown";
import { useState } from "react";
import Transactions from "@/app/components/summary/transaction";
import Charts from "@/app/components/summary/barcharts";
import { RenderBarChart } from "@/app/components/chart";
import Detailed from "@/app/components/summary/detailed";
import UserDetails from "@/app/components/userDetails";
// import ThemeToggleButton from "@/app/components/toggleButton";

export default function Users(){
    const [adminInfo, setAdminInfo] = useState("users");
  
   const dDriveroverview = [
     {
       text: "Users",
       click: "users",
     },
     {
       text: "Transactions",
       click: "transactions",
     },
     
   ];
  const overview = [
    {
      text: "Total Users",
      count: "2",
      
      color: `${lightTheme.palette.custom.green}`,
    },
    {
      text: "Active Drivers",
      count: "5",
      
      color: `${lightTheme.palette.custom.red}`,
    },
    {
      text: "Admins",
      count: "2",
      color: `${lightTheme.palette.custom.gold}`,
    },
    {
      text: "Total Transactions",
      count: "3",
     
      color: `${lightTheme.palette.custom.purple}`,
    },
  ]; 


 

    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h1"
              sx={{ fontSize: "30px", fontWeight: "700", lineHeight: "36px" }}
            >
              User Management
              {/* <ThemeToggleButton/> */}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
                color: lightTheme.palette.custom.gray,
              }}
            >
              Manage system users and their transactions
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                backgroundColor: lightTheme.palette.custom.red,
                color: lightTheme.palette.custom.gold,
                display: "flex",
                gap: "5px",
                height: "30px",
              }}
            >
              <IoMdPersonAdd />
              Add User
            </Button>
          </Box>
        </Box>

        {/* //////////////////////////////////////////////////////////////////////// */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "start",
            gap: "20px",
          }}
        >
          {overview.map((item, index) => {
            return (
              <Box
                key={index}
                sx={{
                  border: `1px solid ${lightTheme.palette.custom.blueGray}`,
                  backgroundColor: lightTheme.palette.background.default,
                  borderLeft: `5px solid ${item.color}`,
                  width: "33%",
                  borderRadius: "10px",
                  padding: "30px 20px",
                  gap: "15px",
                  display: "flex",
                  flexDirection: "column",
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
                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "24px",
                      fontWeight: "700",
                      lineHeight: "32px",
                    }}
                  >
                    {item.count}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
        {/* //////////////////////////////////////////////////////////////////////// */}
        <Box
          sx={{
            border: `1px solid ${lightTheme.palette.custom.iceBlue}`,
            padding: "10px 20px",
            borderRadius: "10px",
            backgroundColor: lightTheme.palette.background.default,
            display: "flex",
            flexDirection: "column",
            gap: "50px",
          }}
        >
          <Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              {dDriveroverview.map((item, index) => {
                return (
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
            {adminInfo == "users" && <UserDetails />}
            {adminInfo == "transactions" && <Charts />}
          </Box>
        </Box>
      </Box>
    );}