import { useState } from "react";
import {
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Box } from "@mui/system";
import { lightTheme } from "../theme/theme";
import { IoMdAdd } from "react-icons/io";
import Dropdown from "./dropdown";

export default function UserTransactions() {
  const tabOptions1 = [
    { value: "tab1", label: "John Doe" },
    { value: "tab2", label: "Jane Smith" },
    { value: "tab3", label: "Admin" },
  ];

  const [selectedTab, setSelectedTab] = useState("tab1");

  const handleDropdownChange = (value: string) => {
    setSelectedTab(value);
    console.log("Selected value:", value);
  };

  const transactionsData = [
    {
      Date: {
        title: "Date",
        items: ["15/04/2023", "16/04/2023", "17/04/2023"],
      },
      Type: {
        title: "Type",
        items: ["Trip Earning", "Trip Expense", "Trip Commission"],
      },
      Credit: {
        title: "Credit",
        items: ["100", "200", "300"],
      },
      Debit: {
        title: "Debit",
        items: ["50", "75", "100"],
      },
      Note: {
        title: "Note",
        items: ["Note 1", "Note 2", "Note 3"],
      },
    },
  ];

  return (
    <Box>
      {/* Header controls */}
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" }, // responsive
        }}
      >
        <Box
          sx={{
            border: `1px solid ${lightTheme.palette.custom.iceBlue}`,
            width: { xs: "100%", sm: "auto" }, // full width on mobile
          }}
        >
          <Dropdown
            options={tabOptions1}
            defaultValue={selectedTab}
            onChange={handleDropdownChange}
          />
        </Box>

        <Button
          sx={{
            backgroundColor: lightTheme.palette.custom.orange,
            color: lightTheme.palette.background.default,
            display: "flex",
            gap: "5px",
            height: "30px",
            textTransform: "none",
            width: { xs: "100%", sm: "auto" }, // full width on mobile
          }}
        >
          <IoMdAdd />
          Add Transaction
        </Button>
      </Box>

      {/* Transactions Table (Only for Drivers) */}
      {selectedTab !== "tab3" && (
        <Box mt={3}>
          <Typography variant="h6" gutterBottom>
            Transactions -{" "}
            {tabOptions1.find((t) => t.value === selectedTab)?.label}
          </Typography>

          {transactionsData.map((data, index) => (
            <Box
              key={index}
              sx={{
                overflowX: "auto", // make table scrollable on small screens
              }}
            >
              <Table size="small" sx={{ minWidth: 600 }}>
                <TableHead>
                  <TableRow>
                    <TableCell>{data.Date.title}</TableCell>
                    <TableCell>{data.Type.title}</TableCell>
                    <TableCell>{data.Credit.title}</TableCell>
                    <TableCell>{data.Debit.title}</TableCell>
                    <TableCell>{data.Note.title}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.Date.items.map((_, i) => (
                    <TableRow key={i}>
                      <TableCell>{data.Date.items[i]}</TableCell>
                      <TableCell>{data.Type.items[i]}</TableCell>
                      <TableCell>{data.Credit.items[i]}</TableCell>
                      <TableCell>{data.Debit.items[i]}</TableCell>
                      <TableCell>{data.Note.items[i]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
