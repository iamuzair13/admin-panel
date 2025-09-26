'use client'

import { Box, Button, Icon, Typography } from "@mui/material";
import { IoCarOutline, IoCarSportOutline, IoColorPaletteOutline, IoPersonOutline } from "react-icons/io5";
import { IoIosTrendingUp, IoMdAdd } from "react-icons/io";
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
// import ThemeToggleButton from "@/app/components/toggleButton";

export default function Reports(){
    const [adminInfo, setAdminInfo] = useState("summary");
  
   const dDriveroverview = [
     {
       text: "Summary",
       click: "summary",
     },
     {
       text: "Charts",
       click: "charts",
     },
     {
       text: "Detailed",
       click: "detailed",
     },
     
   ];
  const overview = [
    {
      text: "Total Credit",
      count: "$15240",
      icon: (
        <IoIosTrendingUp style={{ color: lightTheme.palette.custom.green }} />
      ),
      color: `${lightTheme.palette.custom.green}`,
    },
    {
      text: "Total Debit",
      count: "$8760",
      icon: (
        <IoIosTrendingDown style={{ color: lightTheme.palette.custom.red }} />
      ),
      color: `${lightTheme.palette.custom.red}`,
    },
    {
      text: "Balance",
      count: "$6480",
      icon: <LuDollarSign style={{ color: lightTheme.palette.custom.gold }} />,
      color: `${lightTheme.palette.custom.gold}`,
    },
  ]; 
 const tabOptions1 = [
   { value: "tab1", label: "Weekly" },
   { value: "tab2", label: "Monthly" },
   { value: "tab3", label: "Bi-Monthly" },
 ];
 const types = [
   { value: "tab1", label: "All Types" },
   { value: "tab2", label: "Trip Earning" },
   { value: "tab3", label: "Fuel Expense" },
 ];


 
const handleDropdownChange = (value: string) => {
  console.log("Selected value:", value);
};
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
              Financial Reports
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
              Generate and export financial summaries
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              alignItems: "center",
            }}
          >
            {" "}
            <Dropdown
              options={tabOptions1}
              defaultValue="tab1"
              onChange={handleDropdownChange}
            />
            <Button
              sx={{
                backgroundColor: lightTheme.palette.custom.red,
                color: lightTheme.palette.custom.gold,
                display: "flex",
                gap: "5px",
                height: "30px",
              }}
            >
              <IoMdAdd />
              Export PDF
            </Button>
            <Button
              sx={{
                border: `1px solid ${lightTheme.palette.custom.iceBlue}`,
                color: lightTheme.palette.custom.darkBlue,
                display: "flex",
                gap: "5px",
                height: "30px",
                ":hover": {
                  backgroundColor: lightTheme.palette.custom.gold,
                },
              }}
            >
              <BsDownload />
              Import Excel
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
            {adminInfo == "summary" && <Transactions />}
            {adminInfo == "charts" && <Charts />}
            {adminInfo == "detailed" && <Detailed />}
          </Box>
        </Box>
      </Box>
    );}