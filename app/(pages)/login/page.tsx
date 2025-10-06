"use client"
import { lightTheme } from "@/app/theme/theme";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { FaCarSide } from "react-icons/fa6";
import { redirect } from 'next/navigation';

export default function Login(){
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const loginFunction = (e: React.FormEvent) => {
    e.preventDefault();
    if(username === "admin" && password === "password"){
      redirect('/home');
    } else {
      alert("Invalid credentials. Please try again.");
    }
    
  }
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: `#fff8d9`,
        }}
      >
        <Box
          sx={{
            border: `1px solid ${lightTheme.palette.custom.gold}`,
            borderRadius: "8px",
            padding: "20px 10px 50px 10px",
            width: "450px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: `${lightTheme.palette.background.default}`,
            flexDirection: "column",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <FaCarSide
              style={{
                fontSize: "80px",
                color: `${lightTheme.palette.background.default}`,
                backgroundColor: `${lightTheme.palette.custom.orange}`,
                padding: "20px",
                borderRadius: "50%",
              }}
            />
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "400",
                color: `${lightTheme.palette.text.primary}`,
                textAlign: "center",
                marginTop: "12px",
                lineHeight: "32px",
              }}
            >
              Driver Portal
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: `${lightTheme.palette.custom.gray}`,
                textAlign: "center",
                marginTop: "12px",
                lineHeight: "24px",
              }}
            >
              Sign-in to your account
            </Typography>
          </Box>

          <Box>
            <form onSubmit={loginFunction}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  marginTop: "24px",
                  width: "400px",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Email / Username
                </Typography>
                <input
                  type="text"
                  placeholder="Enter your Email"
                  style={{
                    padding: "3px 4px",
                    border: `1px solid ${lightTheme.palette.custom.gold}`,
                    borderRadius: "4px",
                    outline: "none",
                    fontSize: "16px",
                    color: `${lightTheme.palette.text.primary}`,
                    width: "100%",
                  }}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Password
                </Typography>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  style={{
                    padding: "3px 4px",
                    border: `1px solid ${lightTheme.palette.custom.gold}`,
                    borderRadius: "4px",
                    outline: "none",
                    fontSize: "16px",
                    color: `${lightTheme.palette.text.primary}`,
                    width: "100%",
                  }}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  variant="contained"
                  sx={{
                    marginTop: "12px",
                    backgroundColor: `${lightTheme.palette.custom.orange}`,
                    color: `${lightTheme.palette.background.default}`,
                    "&:hover": {
                      backgroundColor: `${lightTheme.palette.custom.orange}`,
                  },}}
                  type="submit"
                >
                  Login
                </Button>
              </Box>
            </form>
          </Box>
          <Box sx={{
            
          }}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: `${lightTheme.palette.text.primary}`,
                textAlign: "center",
                marginTop: "12px",
                lineHeight: "32px",
              }}
            >
              username: admin
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: `${lightTheme.palette.text.primary}`,
                textAlign: "center",
                marginTop: "12px",
                lineHeight: "32px",
              }}
            >
              password: password
            </Typography>
          </Box>
        </Box>
      </Box>
    );
   
}