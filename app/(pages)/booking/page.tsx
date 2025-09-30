"use client";

import { Box, Button, Typography } from "@mui/material";
import { IoMdAdd, IoMdCash, IoMdPin } from "react-icons/io";
import { lightTheme } from "@/app/theme/theme";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { FaLocationArrow, FaRegClock } from "react-icons/fa6";
import { MdCheckBoxOutlineBlank, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { useState } from "react";
import { Call, CreditCard, Person } from "@mui/icons-material";
import { CiCalendar } from "react-icons/ci";
import { BsPaypal } from "react-icons/bs";

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

  const tripList = [
    {
      id: 1,
      from: "Karachi",
      type: "scheduled",
      name: "John Doe",
      to: "Lahore",
      paymentMethod: "Credit Card",
      date: "2024-06-15",
      startTime: "10:00 AM",
      endTime: "2:00 PM",
      phone: "123-456-7890",
      paymentIcon: <CreditCard />,
      tripStatus: "Start Trip",
      statusIcon: <FaLocationArrow />,
    },
    {
      id: 2,
      from: "Lahore",
      type: "ongoing",
      name: "Jane Smith",
      to: "Islamabad",
      paymentMethod: "PayPal",
      date: "2024-06-16",
      startTime: "11:00 AM",
      endTime: "3:00 PM",
      phone: "987-654-3210",
      paymentIcon: <BsPaypal />,
      tripStatus: "End Trip",
      statusIcon: <MdOutlineCheckBoxOutlineBlank />,
    },
    {
      id: 3,
      from: "Islamabad",
      type: "completed",
      name: "Alice Johnson",
      to: "Quetta",
      paymentMethod: "Debit Card",
      date: "2024-06-17",
      startTime: "12:00 PM",
      endTime: "4:00 PM",
      phone: "456-789-0123",
      paymentIcon: <CreditCard />,
      tripStatus: "Completed",
    },
    {
      id: 4,
      from: "Quetta",
      type: "scheduled",
      name: "Bob Brown",
      to: "Karachi",
      paymentMethod: "Cash",
      date: "2024-06-18",
      startTime: "1:00 PM",
      endTime: "5:00 PM",
      phone: "321-654-0987",
      paymentIcon: <IoMdCash />,
      tripStatus: "Start Trip",
      statusIcon: <FaLocationArrow />,
    },
  ];

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
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          gap: { xs: "15px", md: "0" },
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
              whiteSpace: "nowrap",
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
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "start",
          flexWrap: "wrap",
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
              width: { xs: "100%", sm: "48%", md: "32%" },
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
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {filtered.map((item, index) => (
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
                border: "1px solid transparent",
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

      {/* Trip List */}
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
            <Box
              key={trip.id}
              sx={{
                borderBottom: `1px solid ${lightTheme.palette.custom.blueGray}`,
                padding: "10px 0",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Person />
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      lineHeight: "24px",
                    }}
                  >
                    {trip.name}
                  </Typography>
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    color: lightTheme.palette.custom.gray,
                  }}
                >
                  <Call
                    style={{
                      fontSize: "16px",
                      color: lightTheme.palette.custom.gray,
                    }}
                  />{" "}
                  : {trip.phone}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    color: lightTheme.palette.custom.gray,
                  }}
                >
                  <IoMdPin
                    style={{
                      fontSize: "16px",
                      color: lightTheme.palette.custom.red,
                    }}
                  />{" "}
                  From : {trip.from}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    color: lightTheme.palette.custom.gray,
                  }}
                >
                  <IoMdPin
                    style={{
                      fontSize: "16px",
                      color: lightTheme.palette.custom.green,
                    }}
                  />{" "}
                  To: {trip.to}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    color: lightTheme.palette.custom.gray,
                  }}
                >
                  <CiCalendar />
                  {trip.date}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    color: lightTheme.palette.custom.gray,
                  }}
                >
                  <FaRegClock />
                  Start: {trip.startTime}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    color: lightTheme.palette.custom.gray,
                  }}
                >
                  <FaRegClock />
                  End: {trip.endTime}
                </Typography>

                <Typography
                  variant="h4"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "20px",
                    color: lightTheme.palette.custom.gray,
                  }}
                >
                  {trip.paymentIcon}
                  {trip.paymentMethod}
                </Typography>

                <Button
                  sx={() => {
                    if (trip.tripStatus === "Completed") {
                      return {
                        marginTop: "10px",
                        backgroundColor: lightTheme.palette.custom.green,
                        color: lightTheme.palette.background.default,
                        cursor: "not-allowed",
                      };
                    } else if (trip.tripStatus === "Start Trip") {
                      return {
                        marginTop: "10px",
                        backgroundColor: lightTheme.palette.custom.blue,
                        color: lightTheme.palette.background.default,
                      };
                    } else {
                      return {
                        marginTop: "10px",
                        backgroundColor: lightTheme.palette.custom.red,
                        color: lightTheme.palette.background.default,
                      };
                    }
                  }}
                >
                  {trip.statusIcon}
                  {trip.tripStatus}
                </Button>
              </Box>
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

