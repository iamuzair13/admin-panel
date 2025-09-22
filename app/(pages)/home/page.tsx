"use client";

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { FaCarSide, } from "react-icons/fa6";
import {MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { TbListDetails, TbReportSearch } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { FaRegCalendar } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";


import Navigation from "@/app/components/navigation";
import Image from "next/image";
import Booking from "../booking/page";
import Details from "../details/page";
import Profile from "../profile/page";
import Reports from "../reports/page";
import Users from "../users/page";


const drawerWidth = 240;


const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

const [error, setError] = React.useState(false);

const[page, setPage] = React.useState("Dashboard")

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                mr: 2,
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader
          sx={{
            backgroundColor: "background.darkBlue",
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "0.5px solid darkGray",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              color: "text.white",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "background.orange",
                width: "30px",
                height: "30px",
                borderRadius: "10px",
              }}
            >
              <FaCarSide />
            </Box>

            <Box>
              <Typography
                sx={{
                  color: "text.white",
                  fontFamily: "system-ui",
                  fontSize: "16px",
                }}
                variant="h4"
              >
                Admin Portal
              </Typography>
              <Typography
                sx={{
                  color: "text.gray",
                  fontFamily: "system-ui",
                  fontSize: "12px",
                }}
                variant="h4"
              >
                ADMIN
              </Typography>
            </Box>
          </Box>
          <IconButton onClick={handleDrawerClose} sx={{ color: "text.orange" }}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            color: "text.white",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "background.darkBlue",
            height: "100px",
            borderRadius: "0px",
            borderBottom: "1px solid darkGray",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "background.orange",
              width: "30px",
              height: "30px",
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
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>AU</span>
            )}
          </Box>

          <Box>
            <Typography
              sx={{
                color: "text.white",
                fontFamily: "system-ui",
                fontSize: "16px",
              }}
              variant="h4"
            >
              Admin Name
            </Typography>
            <Typography
              sx={{
                color: "text.gray",
                fontFamily: "system-ui",
                fontSize: "12px",
              }}
              variant="h4"
            >
              admin@gmail.com
            </Typography>
          </Box>
        </Box>

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
              onClick={() => {
                setPage("home");
              }}
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
              onClick={() => {
                setPage("profile");
              }}
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
              onClick={() => {
                setPage("details");
              }}
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
              onClick={() => {
                setPage("reports");
              }}
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
              onClick={() => {
                setPage("bookings");
              }}
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
              onClick={() => {
                setPage("users");
              }}
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
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {page == "home" && <Typography> Dashboard </Typography>}
        {page == "profile" && <Profile/>}
        {page == "details" && <Details/>}
        {page == "bookings" && <Booking/>}
        {page == "users" && <Users/>}
        {page == "reports" && <Reports/>}
      </Main>
    </Box>
  );
}
