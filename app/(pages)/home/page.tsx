"use client";

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
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
  Button,
} from "@mui/material";

import { TbListDetails, TbReportSearch } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { FaRegCalendar } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Booking from "../booking/page";
import Details from "../details/page";
import Profile from "../profile/page";
import Reports from "../reports/page";
import Users from "../users/page";
import Dashboard from "../dashboard/page";
import { lightTheme } from "@/app/theme/theme";
import { IoIosLogOut } from "react-icons/io";
import { redirect } from "next/dist/server/api-utils";


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
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

const [error, setError] = React.useState(false);
const isDark = theme.palette.mode === "light";
const router = useRouter();

const[page, setPage] = useState("dashboard")

  return (
    <Box
      sx={{
        display: "flex",
        padding: "0 2%",
        backgroundColor: isDark
          ? theme.palette.custom.white
          : lightTheme.palette.custom.darkBlue,
      }}
    >
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
          sx={(theme) => ({
            backgroundColor: theme.palette.custom.background.darkBlue,
            display: "flex",
            justifyContent: "space-between",
            borderBottom: `0.5px solid ${theme.palette.custom.darkGray}`,
          })}
        >
          <Box
            sx={(theme) => ({
              display: "flex",
              flexDirection: "row",
              color: theme.palette.custom.white,
              alignItems: "center",
              gap: "10px",
            })}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: theme.palette.custom.background.orange,
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
                  color: theme.palette.custom.white,
                  fontFamily: "system-ui",
                  fontSize: "16px",
                }}
                variant="h4"
              >
                Admin Portal
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.custom.gray,
                  fontFamily: "system-ui",
                  fontSize: "12px",
                }}
                variant="h4"
              >
                ADMIN
              </Typography>
            </Box>
          </Box>
          <IconButton
            onClick={handleDrawerClose}
            sx={{ color: theme.palette.custom.orange }}
          >
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
            color: theme.palette.custom.white,
            alignItems: "center",
            gap: "10px",
            backgroundColor: theme.palette.custom.background.darkBlue,
            height: "100px",
            borderRadius: "0px",
            borderBottom: `1px solid ${theme.palette.custom.darkGray}`,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: theme.palette.custom.background.orange,
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
                color: theme.palette.custom.gray,
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
            backgroundColor: theme.palette.custom.background.darkBlue,
            color: "text.white",
            borderRadius: "0px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingTop: "10px",
            paddingBottom: "20px",
            borderTop: `1px solid ${theme.palette.custom.darkGray}`,
            borderBottom: `1px solid ${theme.palette.custom.darkGray}`,
          }}
        >
          <MenuList sx={{}}>
            <MenuItem
              onClick={() => {
                setPage("dashboard");
              }}
              sx={{
                ":hover": {
                  backgroundColor: theme.palette.custom.background.blueGray,
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
              <ListItemText sx={{ color: theme.palette.custom.white }}>
                Dashboard
              </ListItemText>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setPage("profile");
              }}
              sx={{
                ":hover": {
                  backgroundColor: theme.palette.custom.background.blueGray,
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
              <ListItemText sx={{ color: theme.palette.custom.white }}>
                Profile
              </ListItemText>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setPage("details");
              }}
              sx={{
                ":hover": {
                  backgroundColor: theme.palette.custom.background.blueGray,
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
              <ListItemText sx={{ color: theme.palette.custom.white }}>
                Details
              </ListItemText>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setPage("reports");
              }}
              sx={{
                ":hover": {
                  backgroundColor: theme.palette.custom.background.blueGray,
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
              <ListItemText sx={{ color: theme.palette.custom.white }}>
                Reports
              </ListItemText>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setPage("bookings");
              }}
              sx={{
                ":hover": {
                  backgroundColor: theme.palette.custom.background.blueGray,
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
              <ListItemText sx={{ color: theme.palette.custom.white }}>
                Booking
              </ListItemText>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setPage("users");
              }}
              sx={{
                ":hover": {
                  backgroundColor: theme.palette.custom.background.blueGray,
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
              <ListItemText sx={{ color: theme.palette.custom.white }}>
                Users
              </ListItemText>
            </MenuItem>
            <MenuItem
              component={Link}
              href="/driver/dashboard"
              sx={{
                ":hover": {
                  backgroundColor: theme.palette.custom.background.blueGray,
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
              <ListItemText sx={{ color: theme.palette.custom.white }}>
                Driver
              </ListItemText>
            </MenuItem>
          </MenuList>
        <Box sx={{ 
          paddingLeft: "12px",
         }} >
          <Typography sx={{ display: "flex", alignItems: "center", gap: "10px" ,color: theme.palette.custom.white}}>
            <IoIosLogOut style={{
              fontSize: "20px",
            }}/>
            <Button sx={{ color: theme.palette.custom.white }} onClick={()=>{
              router.push('/');
            }} >
              Logout
            </Button>
          </Typography>
        </Box>
        </Paper>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {page == "dashboard" && <Dashboard />}
        {page == "profile" && <Profile />}
        {page == "details" && <Details />}
        {page == "bookings" && <Booking />}
        {page == "users" && <Users />}
        {page == "reports" && <Reports />}
      </Main>
    </Box>
  );
}
