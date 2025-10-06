import { lightTheme } from "@/app/theme/theme";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Emergency() {
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
          Emergency
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
          {/* Left Column */}
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
                Name
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "12px", md: "14px" },
                  fontWeight: "400",
                  lineHeight: "24px",
                  color: lightTheme.palette.custom.gray,
                }}
              >
                John Doe
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
                Relation
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "12px", md: "14px" },
                  fontWeight: "400",
                  lineHeight: "24px",
                  color: lightTheme.palette.custom.gray,
                }}
              >
                Spouse
              </Typography>
            </Box>
          </Box>

          {/* Right Column */}
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
                Phone Number
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "12px", md: "14px" },
                  fontWeight: "400",
                  lineHeight: "24px",
                  color: lightTheme.palette.custom.gray,
                }}
              >
                123-4567-899
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
