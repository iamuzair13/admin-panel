import { lightTheme } from "@/app/theme/theme";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import CustomizedSwitches from "../switch";
import * as React from "react";
import { MdOutlineLightMode } from "react-icons/md";

export default function Settings() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: "30px", md: "50px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "20px", md: "50px" },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "14px", sm: "15px", md: "16px" },
            fontWeight: "400",
            lineHeight: "16px",
          }}
        >
          Application Settings
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "15px", md: "20px" },
        }}
      >
        {/* Theme Preferences */}
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: "500",
            lineHeight: "28px",
          }}
        >
          Theme Preferences
        </Typography>

        <Box
          sx={{
            backgroundColor: lightTheme.palette.background.default,
            border: `1px solid ${lightTheme.palette.custom.iceBlue}`,
            borderRadius: "10px",
            padding: { xs: "10px", sm: "10px 20px" },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            justifyContent: "space-between",
            gap: { xs: "15px", sm: "0px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <MdOutlineLightMode
              style={{
                color: lightTheme.palette.custom.gold,
                fontSize: "25px",
              }}
            />
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "14px", sm: "15px", md: "16px" },
                  fontWeight: "500",
                  lineHeight: "24px",
                }}
              >
                Dark Mode
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "12px", sm: "13px", md: "14px" },
                  fontWeight: "400",
                  lineHeight: "20px",
                }}
              >
                Switch between light and dark themes
              </Typography>
            </Box>
          </Box>
          <CustomizedSwitches />
        </Box>

        {/* Notifications */}
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: "500",
            lineHeight: "28px",
          }}
        >
          Notifications
        </Typography>

        {[
          {
            title: "Trip Notifications",
            desc: "Get notified about new trip bookings",
          },
          {
            title: "Document Expiry Alerts",
            desc: "Receive alerts when documents are expiring",
          },
          {
            title: "Payment Confirmations",
            desc: "Get notified when payments are processed",
          },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              width: "100%",
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", sm: "center" },
              gap: { xs: "10px", sm: "0px" },
            }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                  fontWeight: "500",
                  lineHeight: "24px",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "12px", md: "14px" },
                  fontWeight: "400",
                  lineHeight: "20px",
                }}
              >
                {item.desc}
              </Typography>
            </Box>
            <CustomizedSwitches />
          </Box>
        ))}

        {/* Privacy & Security */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: "500",
              lineHeight: "28px",
            }}
          >
            Privacy & Security
          </Typography>

          {[
            { text: "Change Password" },
            { text: "Download My Data" },
            { text: "Delete Account", color: lightTheme.palette.custom.red },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: lightTheme.palette.background.default,
                border: `1px solid ${lightTheme.palette.custom.iceBlue}`,
                borderRadius: "10px",
                width: { xs: "100%", sm: "95%" },
                padding: "5px 20px",
                ":hover": {
                  backgroundColor: lightTheme.palette.custom.orange,
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "13px", md: "14px" },
                  fontWeight: "500",
                  lineHeight: "20px",
                  color: item.color || lightTheme.palette.text.primary,
                }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
