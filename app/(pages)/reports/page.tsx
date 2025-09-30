"use client";

import { Box, Button, Typography } from "@mui/material";
import { IoIosTrendingUp, IoMdAdd, IoIosTrendingDown } from "react-icons/io";
import { LuDollarSign } from "react-icons/lu";
import { BsDownload } from "react-icons/bs";
import { lightTheme } from "@/app/theme/theme";
import Dropdown from "@/app/components/dropdown";
import { useState } from "react";
import Transactions from "@/app/components/summary/transaction";
import Charts from "@/app/components/summary/barcharts";
import Detailed from "@/app/components/summary/detailed";

export default function Reports() {
  const [adminInfo, setAdminInfo] = useState("summary");

  const dDriveroverview = [
    { text: "Summary", click: "summary" },
    { text: "Charts", click: "charts" },
    { text: "Detailed", click: "detailed" },
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
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <Box>
          <Typography
            variant="h1"
            sx={{ fontSize: "30px", fontWeight: "700", lineHeight: "36px" }}
          >
            Financial Reports
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
            gap: "15px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
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
              flexShrink: 0,
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
              flexShrink: 0,
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

      {/* Overview Cards */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "start",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {overview.map((item, index) => (
          <Box
            key={index}
            sx={{
              border: `1px solid ${lightTheme.palette.custom.blueGray}`,
              backgroundColor: lightTheme.palette.background.default,
              borderLeft: `5px solid ${item.color}`,
              width: { xs: "100%", sm: "48%", md: "32%" },
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
        ))}
      </Box>

      {/* Tabs + Content */}
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
              flexWrap: "wrap",
            }}
          >
            {dDriveroverview.map((item, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: lightTheme.palette.background.default,
                  width: { xs: "100%", sm: "48%", md: "22%" },
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
            ))}
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
          }}
        >
          {adminInfo == "summary" && <Transactions />}
          {adminInfo == "charts" && <Charts />}
          {adminInfo == "detailed" && <Detailed />}
        </Box>
      </Box>
    </Box>
  );
}
