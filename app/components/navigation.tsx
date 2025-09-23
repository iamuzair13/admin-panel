"use client";

import {
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";

import { TbListDetails, TbReportSearch } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { FaRegCalendar } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";


export default function Navigation() {
    const[page, setPage] = useState("")
  return (
    <Paper
      sx={{
        height: "100%",
        backgroundColor: "background.darkBlue",
        color: "text.white",
        borderRadius: "0px",
      }}
    >
      <MenuList sx={{}}>
        <MenuItem
          onClick={()=>{setPage("home")}}
          sx={{
            ":hover": {
              backgroundColor: "background.blueGray",
            },
            width: "80%",
            padding: "6px",
            marginLeft: "12px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <ListItemIcon>
            <LuLayoutDashboard style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </MenuItem>
        <MenuItem
          component={Link}
          href="/profile"
          sx={{
            ":hover": {
              backgroundColor: "background.blueGray",
            },
            width: "80%",
            padding: "6px",
            marginLeft: "12px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <ListItemIcon>
            <CgProfile style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </MenuItem>
        <MenuItem
          component={Link}
          href="/details"
          sx={{
            ":hover": {
              backgroundColor: "background.blueGray",
            },
            width: "80%",
            padding: "6px",
            marginLeft: "12px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <ListItemIcon>
            <TbListDetails style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText>Details</ListItemText>
        </MenuItem>
        <MenuItem
          component={Link}
          href="/reports"
          sx={{
            ":hover": {
              backgroundColor: "background.blueGray",
            },
            width: "80%",
            padding: "6px",
            marginLeft: "12px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <ListItemIcon>
            <TbReportSearch style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText>Reports</ListItemText>
        </MenuItem>
        <MenuItem
          component={Link}
          href="/booking"
          sx={{
            ":hover": {
              backgroundColor: "background.blueGray",
            },
            width: "80%",
            padding: "6px",
            marginLeft: "12px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <ListItemIcon>
            <FaRegCalendar style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText>Booking</ListItemText>
        </MenuItem>
        <MenuItem
          component={Link}
          href="/users"
          sx={{
            ":hover": {
              backgroundColor: "background.blueGray",
            },
            width: "80%",
            padding: "6px",
            marginLeft: "12px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <ListItemIcon>
            <HiOutlineUsers style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText>Users</ListItemText>
        </MenuItem>
        <MenuItem
          component={Link}
          href="/driver/dashboard"
          sx={{
            ":hover": {
              backgroundColor: "background.blueGray",
            },
            width: "80%",
            padding: "6px",
            marginLeft: "12px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <ListItemIcon>
            <HiOutlineUsers style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText>Driver</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
