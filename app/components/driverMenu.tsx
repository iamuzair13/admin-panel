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
import Link from "next/link";

export default function DriverNavigation() {
  return (
    <Paper
      sx={{
        height: "100%",
        backgroundColor: "background.darkBlue",
        color: "text.white",
        borderRadius: "0px",
      }}
    >
      <MenuList
        sx={{
          display: "flex",
          flexDirection: { xs: "row", sm: "column" },
          flexWrap: { xs: "wrap", sm: "nowrap" },
          justifyContent: { xs: "center", sm: "flex-start" },
          alignItems: { xs: "center", sm: "flex-start" },
          gap: { xs: "8px", sm: "0px" },
          padding: { xs: "8px", sm: "0px" },
        }}
      >
        {[
          { href: "/", label: "Dashboard", icon: <LuLayoutDashboard /> },
          { href: "/profile", label: "Profile", icon: <CgProfile /> },
          { href: "/details", label: "Details", icon: <TbListDetails /> },
          { href: "/reports", label: "Reports", icon: <TbReportSearch /> },
          { href: "/booking", label: "Booking", icon: <FaRegCalendar /> },
          { href: "/", label: "Admin", icon: <FaRegCalendar /> },
        ].map((navItem, index) => (
          <MenuItem
            key={index}
            component={Link}
            href={navItem.href}
            sx={{
              ":hover": {
                backgroundColor: "background.blueGray",
              },
              width: { xs: "auto", sm: "80%" },
              padding: "6px",
              marginLeft: { xs: "0px", sm: "12px" },
              borderRadius: "10px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", sm: "flex-start" },
              minWidth: { xs: "80px", sm: "unset" },
            }}
          >
            <ListItemIcon
              sx={{ minWidth: "32px", display: "flex", justifyContent: "center" }}
            >
              {navItem.icon}
            </ListItemIcon>
            <ListItemText
              primary={navItem.label}
              sx={{
                display: { xs: "none", sm: "block" },
                color: "white",
              }}
            />
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
}
