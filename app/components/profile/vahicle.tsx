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
          gap: "50px",
        }}
      >
        <Typography>Vehicle Information</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            gap: "40%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "50px",
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
              <Typography
                variant="h4"
                sx={{
                  fontSize: "12px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  color: lightTheme.palette.custom.gray,
                }}
              >
                <Box
                  sx={{
                    border: `1px solid ${lightTheme.palette.custom.darkGray}`,
                    padding: "10px 0",
                    width: "200px",
                    borderRadius: "5px",
                  }}
                ></Box>
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "50px",
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
