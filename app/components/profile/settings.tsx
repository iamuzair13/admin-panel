import { lightTheme } from "@/app/theme/theme";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import CustomizedSwitches from "../switch";
import * as React from "react";
import { BiError } from "react-icons/bi";
import { MdOutlineLightMode } from "react-icons/md";

export default function Settings(){
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "50px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: "16px",
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
            gap: "20px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: "18px",
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
              padding: "10px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
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
                    fontSize: "16px",
                    fontWeight: "500",
                    lineHeight: "24px",
                  }}
                >
                  Dark Mode
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "14px",
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
          <Typography
            variant="h4"
            sx={{
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "28px",
            }}
          >
            Notifications
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "24px",
                }}
              >
                Trip Notifications
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "20px",
                }}
              >
                Get notified about new trip bookings
              </Typography>
            </Box>
            <CustomizedSwitches />
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "24px",
                }}
              >
                Document Expiry Alerts
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "20px",
                }}
              >
                Receive alerts when documents are expiring
              </Typography>
            </Box>
            <CustomizedSwitches />
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "24px",
                }}
              >
                Payment Confirmations
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "20px",
                }}
              >
                Get notified when payments are processed
              </Typography>
            </Box>
            <CustomizedSwitches />
          </Box>

          <Box
          sx={{display:"flex", flexDirection:"column", gap:"10px"}}>
            <Typography
              variant="h4"
              sx={{
                fontSize: "18px",
                fontWeight: "500",
                lineHeight: "28px",
              }}
            >
              Privacy & Security
            </Typography>
            <Box
              sx={{
                backgroundColor: lightTheme.palette.background.default,
                border: `1px solid ${lightTheme.palette.custom.iceBlue}`,
                borderRadius: "10px",
                width:"95%",
                padding: "5px 20px",
                ":hover": {
                  backgroundColor: lightTheme.palette.custom.orange,
                },
              }}
            >
              <Typography
                sx={{
                 fontSize: "14px",
                 fontWeight:"500",
                 lineHeight:"20px"
                }}
              >
                Change Password
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: lightTheme.palette.background.default,
                border: `1px solid ${lightTheme.palette.custom.iceBlue}`,
                borderRadius: "10px",
                width:"95%",
                padding: "5px 20px",
                ":hover": {
                  backgroundColor: lightTheme.palette.custom.orange,
                },
              }}
            >
              <Typography
                sx={{
                 fontSize: "14px",
                 fontWeight:"500",
                 lineHeight:"20px"
                }}
              >
                Download My Data
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: lightTheme.palette.background.default,
                border: `1px solid ${lightTheme.palette.custom.iceBlue}`,
                borderRadius: "10px",
                width:"95%",
                padding: "5px 20px",
                ":hover": {
                  backgroundColor: lightTheme.palette.custom.orange,
                },
              }}
            >
              <Typography
                sx={{
                 fontSize: "14px",
                 fontWeight:"500",
                 lineHeight:"20px",
                 color : lightTheme.palette.custom.red
                }}
              >
                Delete Account
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    );
}