import { lightTheme } from "@/app/theme/theme";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function BasicInfo() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "30px", md: "50px" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "18px", md: "22px" },
            fontWeight: "600",
          }}
        >
          Basic Information
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            paddingRight: { xs: "0px", md: "200px" },
            gap: { xs: "30px", md: "0px" },
          }}
        >
          {/* Left Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "30px", md: "50px" },
            }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "14px",
                }}
              >
                Fullname
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "12px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  color: lightTheme.palette.custom.gray,
                }}
              >
                Admin User
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "14px",
                }}
              >
                Phone Number
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "12px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  color: lightTheme.palette.custom.gray,
                }}
              >
                123-4567-89
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "14px",
                }}
              >
                Address
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "12px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  color: lightTheme.palette.custom.gray,
                }}
              >
                zexrct, drftgyhu , vtybui
              </Typography>
            </Box>
          </Box>

          {/* Right Section */}
          <Box>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "14px",
                }}
              >
                Email
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "12px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  color: lightTheme.palette.custom.gray,
                }}
              >
                example@gmail.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
