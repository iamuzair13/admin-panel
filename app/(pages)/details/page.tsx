'use client'

import { Box, Button, Typography } from "@mui/material";
import { IoMdAdd } from "react-icons/io";
import { LuDollarSign } from "react-icons/lu";
import { lightTheme } from "@/app/theme/theme";
import { BsDownload } from "react-icons/bs";
import Dropdown from "@/app/components/dropdown";

export default function Details() {
  const overview = [
    {
      text: "Total Credit",
      count: "$15240",
      icon: <LuDollarSign style={{ color: lightTheme.palette.custom.green }} />,
      color: `${lightTheme.palette.custom.green}`,
    },
    {
      text: "Total Debit",
      count: "$8760",
      icon: <LuDollarSign style={{ color: lightTheme.palette.custom.red }} />,
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
    { value: "tab1", label: "Last 1 Month" },
    { value: "tab2", label: "Last 2 Month" },
    { value: "tab3", label: "Last 3 Month" },
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
            Transaction Details
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
            Track your earnings and expenses
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Button
            sx={{
              border: `1px solid ${lightTheme.palette.custom.iceBlue}`,
              color: lightTheme.palette.custom.darkBlue,
              display: "flex",
              gap: "5px",
              height: "30px",
              ":hover": {
                backgroundColor: lightTheme.palette.custom.orange,
              },
            }}
          >
            <BsDownload />
            Import Excel
          </Button>
          <Button
            sx={{
              backgroundColor: lightTheme.palette.custom.orange,
              color: lightTheme.palette.background.default,
              display: "flex",
              gap: "5px",
              height: "30px",
            }}
          >
            <IoMdAdd />
            Add Transaction
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
        {overview.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                border: `1px solid ${lightTheme.palette.custom.blueGray}`,
                backgroundColor: lightTheme.palette.background.default,
                borderLeft: `5px solid ${item.color}`,
                flex: "1 1 250px",
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

      {/* Transactions Section */}
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <Typography>Transaction History</Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <Dropdown
              options={tabOptions1}
              defaultValue="tab1"
              onChange={handleDropdownChange}
            />
            <Dropdown
              options={types}
              defaultValue="tab1"
              onChange={handleDropdownChange}
            />
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
              Export PDf
            </Button>
          </Box>
        </Box>

        {/* Table Header */}
        <Box
          sx={{
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              flex: "1 1 300px",
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <Typography variant="h4" sx={{ fontSize: "14px", fontWeight: "500" }}>
              Date
            </Typography>
            <Typography variant="h4" sx={{ fontSize: "14px", fontWeight: "500" }}>
              Type
            </Typography>
            <Typography variant="h4" sx={{ fontSize: "14px", fontWeight: "500" }}>
              Credit
            </Typography>
            <Typography variant="h4" sx={{ fontSize: "14px", fontWeight: "500" }}>
              Debit
            </Typography>
          </Box>
          <Box
            sx={{
              flex: "1 1 150px",
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <Typography variant="h4" sx={{ fontSize: "14px", fontWeight: "500" }}>
              Note
            </Typography>
            <Typography variant="h4" sx={{ fontSize: "14px", fontWeight: "500" }}>
              Action
            </Typography>
          </Box>
        </Box>

        <Typography
          variant="h4"
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "20px",
          }}
        >
          All Transactions here
        </Typography>
      </Box>
    </Box>
  );
}
