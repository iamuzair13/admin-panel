'use client'

import { Box, Typography } from "@mui/material";
import { IoCarSportOutline } from "react-icons/io5";
import { IoIosTrendingUp, IoIosTrendingDown } from "react-icons/io";
import { LuDollarSign } from "react-icons/lu";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRightLong, FaLocationArrow } from "react-icons/fa6";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { lightTheme } from "@/app/theme/theme";
import { MyChart } from "@/app/components/chart";

export default function Dashboard() {
  const overview = [
    {
      text: "Total Trips",
      count: "156",
      icon: <IoCarSportOutline style={{ color: lightTheme.palette.custom.blue }} />,
      color: `${lightTheme.palette.custom.blue}`,
      percentage: "+12",
    },
    {
      text: "Total Credit",
      count: "$15240",
      icon: <IoIosTrendingUp style={{ color: lightTheme.palette.custom.green }} />,
      color: `${lightTheme.palette.custom.green}`,
      percentage: "+8",
    },
    {
      text: "Total Debit",
      count: "$8760",
      icon: <IoIosTrendingDown style={{ color: lightTheme.palette.custom.red }} />,
      color: `${lightTheme.palette.custom.red}`,
      percentage: "-3",
    },
    {
      text: "Balance",
      count: "$6480",
      icon: <LuDollarSign style={{ color: lightTheme.palette.custom.gold }} />,
      color: `${lightTheme.palette.custom.gold}`,
      percentage: "+15",
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
      {/* Header */}
      <Box>
        <Typography
          variant="h1"
          sx={{ fontSize: "30px", fontWeight: "700", lineHeight: "36px" }}
        >
          Welcome back, Admin User
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
          Here's your performance overview
        </Typography>
      </Box>

      {/* Overview Cards */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        {overview.map((item, index) => (
          <Box
            key={index}
            sx={{
              border: `1px solid ${lightTheme.palette.custom.blueGray}`,
              backgroundColor: lightTheme.palette.background.default,
              borderLeft: `5px solid ${item.color}`,
              flex: { xs: "1 1 100%", sm: "1 1 48%", md: "1 1 22%" },
              borderRadius: "10px",
              padding: "10px 20px",
              gap: "15px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
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
              <Box>{item.icon}</Box>
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
              <Typography
                variant="h6"
                sx={{
                  fontSize: "12px",
                  fontWeight: "400",
                  lineHeight: "16px",
                }}
              >
                {item.percentage}% from past month
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Chart Section */}
      <Box
        sx={{
          border: `1px solid ${lightTheme.palette.custom.iceBlue}`,
          backgroundColor: lightTheme.palette.background.default,
          borderRadius: "10px",
          width: "100%",
          padding: "30px",
        }}
      >
        <MyChart />
      </Box>

      {/* Quick Actions + Recent Trips */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "20px",
        }}
      >
        {/* Quick Actions */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", md: "1 1 30%" },
            border: `1px solid ${lightTheme.palette.custom.iceBlue}`,
            backgroundColor: lightTheme.palette.background.default,
            borderRadius: "10px",
            padding: "10px 10px 100px 10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "16px",
            }}
          >
            Quick Actions
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                border: `1px solid ${lightTheme.palette.custom.iceBlue}`,
                backgroundColor: lightTheme.palette.custom.green,
                color: lightTheme.palette.background.default,
                borderRadius: "5px",
                padding: "5px 10px",
              }}
            >
              <FaCalendarAlt />
              <Typography>Schedule Trip</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                border: `1px solid ${lightTheme.palette.custom.iceBlue}`,
                backgroundColor: lightTheme.palette.custom.blue,
                color: lightTheme.palette.background.default,
                borderRadius: "5px",
                padding: "5px 10px",
              }}
            >
              <FaLocationArrow />
              <Typography>Start Trip</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                border: `1px solid ${lightTheme.palette.custom.iceBlue}`,
                backgroundColor: lightTheme.palette.custom.red,
                color: lightTheme.palette.background.default,
                borderRadius: "5px",
                padding: "5px 10px",
              }}
            >
              <MdOutlineCheckBoxOutlineBlank />
              <Typography>End Trip</Typography>
            </Box>
          </Box>
        </Box>

        {/* Recent Trips */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", md: "1 1 70%" },
            border: `1px solid ${lightTheme.palette.custom.iceBlue}`,
            backgroundColor: lightTheme.palette.background.default,
            borderRadius: "10px",
            padding: "10px 10px 100px 10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "16px",
            }}
          >
            Recent Trips
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                backgroundColor: lightTheme.palette.custom.white,
                borderRadius: "5px",
                padding: "10px 20px",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "500",
                    lineHeight: "24px",
                    color: lightTheme.palette.text.primary,
                  }}
                >
                  John Smith
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    color: lightTheme.palette.text.primary,
                    display: "flex",
                    width: "100px",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  start <FaArrowRightLong /> End
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "24px",
                    color: lightTheme.palette.text.primary,
                  }}
                >
                  $45
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "12px",
                    fontWeight: "500",
                    lineHeight: "16px",
                    color: lightTheme.palette.text.primary,
                    backgroundColor: lightTheme.palette.custom.lightGreen,
                    padding: "2px 4px",
                    borderRadius: "10px",
                  }}
                >
                  Completed
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

