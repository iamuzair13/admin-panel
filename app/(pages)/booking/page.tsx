"use client";

import { Box, Button, Typography } from "@mui/material";
import { IoMdAdd } from "react-icons/io";
import { lightTheme } from "@/app/theme/theme";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { FaLocationArrow } from "react-icons/fa6";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { useState } from "react";

export default function Booking() {
  const [tripInfo, setTripInfo] = useState("allTrips");

  const overview = [
    {
      text: "Scheduled",
      count: "1",
      icon: (
        <RiCalendarScheduleLine
          style={{ color: lightTheme.palette.custom.green }}
        />
      ),
      color: `${lightTheme.palette.custom.green}`,
    },
    {
      text: "Ongoing",
      count: "2",
      icon: (
        <FaLocationArrow style={{ color: lightTheme.palette.custom.red }} />
      ),
      color: `${lightTheme.palette.custom.red}`,
    },
    {
      text: "Completed Today",
      count: "3",
      icon: (
        <MdCheckBoxOutlineBlank
          style={{ color: lightTheme.palette.custom.gold }}
        />
      ),
      color: `${lightTheme.palette.custom.gold}`,
    },
  ];

  const trips = [
    { text: "All Trips", type: "allTrips" },
    { text: "Scheduled", type: "scheduled" },
    { text: "On Going", type: "ongoing" },
    { text: "Completed", type: "completed" },
  ];

  const [filtered, setFiltered] = useState(trips);

  const allTrips = () => setFiltered(trips);
  const scheduled = () =>
    setFiltered(trips.filter((item) => item.type === "scheduled"));
  const completed = () =>
    setFiltered(trips.filter((item) => item.type === "completed"));
  const ongoing = () =>
    setFiltered(trips.filter((item) => item.type === "ongoing"));

  // ✅ Dummy trip data
  const tripList = [
    { id: 1, name: "Trip to Karachi", type: "scheduled" },
    { id: 2, name: "Trip to Lahore", type: "ongoing" },
    { id: 3, name: "Trip to Islamabad", type: "completed" },
    { id: 4, name: "Trip to Quetta", type: "scheduled" },
  ];

  // ✅ Apply filter based on tripInfo
  const visibleTrips =
    tripInfo === "allTrips"
      ? tripList
      : tripList.filter((trip) => trip.type === tripInfo);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "50px" }}>
      {/* Header */}
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
            Trip Booking
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
            Manage your trips from booking to completion
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "20px" }}>
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
            Schedule Booking
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
        }}
      >
        {overview.map((item, index) => (
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
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Box>{item.icon}</Box>
              <Typography
                variant="h4"
                sx={{ fontSize: "14px", fontWeight: "500", lineHeight: "20px" }}
              >
                {item.text}
              </Typography>
            </Box>
            <Typography
              variant="h4"
              sx={{ fontSize: "24px", fontWeight: "700", lineHeight: "32px" }}
            >
              {item.count}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Filter Buttons */}
      <Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          {filtered.map((item, index) => (
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
                border:
                  tripInfo === item.type
                    ? `2px solid ${lightTheme.palette.custom.blue}`
                    : "1px solid transparent",
              }}
              onClick={() => setTripInfo(item.type)}
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
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: lightTheme.palette.background.default,
          width: "100%",
          borderRadius: "10px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {visibleTrips.length > 0 ? (
          visibleTrips.map((trip) => (
            <Box>
                <Box>
                    <Box>
                        
                    </Box>
                </Box>
                <Box></Box>
            </Box>
          ))
        ) : (
          <Typography sx={{ fontSize: "16px", color: "gray" }}>
            No trips available.
          </Typography>
        )}
      </Box>
    </Box>
  );
}
