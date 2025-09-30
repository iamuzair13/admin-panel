import { lightTheme, darkTheme } from "@/app/theme/theme";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Vahicle() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <Typography>Vehicle Information</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "flex-start", md: "space-between" },
            gap: { xs: "30px", md: "15%" },
          }}
        >
          {/* Left Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
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
                Vehicle Number
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
                ABC-1234
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
                Chassis Number
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
                sedrftgyhujicvbnm
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
                Insurance Expiry Date
              </Typography>
              <Box
                sx={{
                  border: `1px solid ${lightTheme.palette.custom.darkGray}`,
                  padding: "10px 0",
                  width: { xs: "100%", sm: "200px" },
                  borderRadius: "5px",
                }}
              ></Box>
            </Box>
          </Box>

          {/* Right Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
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
                Vehicle Type
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
                Sedan
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
                Licence ID
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
                SH234567
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
                Registration Expiry Date
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
