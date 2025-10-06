import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { lightTheme } from "../../theme/theme";

interface ItemData {
  count: string[];
  color?: string | ((value: string) => string);
}

interface Section {
  title: string;
  items: ItemData | string[];
}

export interface DataEntry {
  [key: string]: Section;
}

export default function Transactions() {
  const data: DataEntry[] = [
    {
      period: {
        title: "Period",
        items: ["Jan", "Feb", "Mar"],
      },
    },
    {
      credit: {
        title: "Total Credit",
        items: {
          count: ["123", "345", "467"],
          color: lightTheme.palette.custom.green,
        },
      },
    },
    {
      debit: {
        title: "Total Debit",
        items: {
          count: ["123", "345", "467"],
          color: lightTheme.palette.custom.red,
        },
      },
    },
    {
      balance: {
        title: "Balance",
        items: {
          count: ["123", "-345", "467"],
          color: (value: string) =>
            Number(value) > 0
              ? lightTheme.palette.custom.green
              : lightTheme.palette.custom.red,
        },
      },
    },
  ];

  return (
    <Box>
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
          Monthly Summary
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
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
    </Box>
  );
}
