import { lightTheme } from "@/app/theme/theme";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DataEntry } from "./transaction";

export default function Detailed(){
     const data: DataEntry[] = [
    {
      period: {
        title: "Date",
        items: ["Jan", "Feb", "Mar"],
      },
    },
    {
      type: {
        title: "Type",
        items: {
          count: ["Trip Earning", "Trip Earning", "Trip Earning"],
        },
      },
    },
    {
      credit: {
        title: "Credit",
        items: {
          count: ["123", "345", "467"],
          color: lightTheme.palette.custom.green,
        },
      },
    },
    {
      debit: {
        title: "Debit",
        items: {
          count: ["123", "345", "467"],
          color: lightTheme.palette.custom.green,
        },
      },
    },
    {
      balance: {
        title: "Note",
        items: {
          count: ["start -> end",],
          
        },
      },
    },
  ];
    return (
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography>Detailed Transaction List</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingRight: "200px",
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            border: `1px solid ${lightTheme.palette.custom.iceBlue}`,
            padding: "10px 20px",
            borderRadius: "10px",
            backgroundColor: lightTheme.palette.background.default,
            display: "flex",
            //   flexDirection: "column",
            gap: "50px",
          }}
        >
          {data.map((item, index) => {
            const key = Object.keys(item)[0];
            const { title, items } = item[key];

            const isObject = !Array.isArray(items);

            const itemValues = isObject ? items.count : items;
            const itemColor = isObject ? items.color : undefined;

            return (
              <Box
                key={index}
                sx={{
                  padding: "20px 0",
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    lineHeight: "20px",
                  }}
                >
                  {title}
                </Typography>
                <Box
                  sx={{
                    padding: "20px 0",
                    width: "100%",
                  }}
                >
                  {itemValues.map((value, idx) => (
                    <Typography
                      key={idx}
                      variant="body2"
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        lineHeight: "20px",
                        padding: "10px 0",
                        borderBottom: `1px solid ${lightTheme.palette.custom.iceBlue}`,
                        width: "100%",
                        color:
                          typeof itemColor === "function"
                            ? itemColor(value)
                            : itemColor,
                      }}
                    >
                      {value}
                    </Typography>
                  ))}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    );
}