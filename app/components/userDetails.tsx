import { Typography, Box } from "@mui/material";
import { lightTheme } from "../theme/theme";
import { useState } from "react";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

interface User {
  name: string;
  email: string;
  role: string;
  status: string;
  lastLogin: string;
  trips: string;
  Earnings: string;
  Actions: string;
  vehicle: string;
}

export default function UserDetails() {
  const users: User[] = [
    {
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
      lastLogin: "2024-10-01",
      trips: "0",
      Earnings: "$0",
      Actions: "edit/delete",
      vehicle: "N/A",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Driver",
      status: "active",
      lastLogin: "2024-09-15",
      trips: "5",
      Earnings: "$100",
      Actions: "edit/delete",
      vehicle: "XYZ-1321",
    },
  ];

  const [error, setError] = useState(false);

  const Column = ({
    title,
    headers,
    renderRow,
  }: {
    title: string;
    headers: string[];
    renderRow: (user: User, index: number) => React.ReactNode;
  }) => (
    <Box sx={{ mb: 2, width: { xs: "100%", md: "33%" } }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 2,
          gap: { xs: "12px", md: "60px" },
          flexWrap: "wrap",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: 600, fontSize: "16px" }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            gap: { xs: "12px", md: "60px" },
            flexWrap: "wrap",
          }}
        >
          {headers.map((h, i) => (
            <Typography
              key={i}
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 600, fontSize: "16px" }}
            >
              {h}
            </Typography>
          ))}
        </Box>
      </Box>

      <Box>
        {users.map((user, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            {renderRow(user, index)}
          </Box>
        ))}
      </Box>
    </Box>
  );

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          mb: 2,
          gap: { xs: "20px", sm: "30px", md: "40px", lg: "60px" },
          width: "100%",
        }}
      >
        <Column
          title="Users"
          headers={["Role", "Status"]}
          renderRow={(user) => (
            <>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor:
                      lightTheme.palette.custom.background.orange,
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                  }}
                >
                  {!error ? (
                    <Image
                      src="/profile.png"
                      alt="AU"
                      width={40}
                      height={40}
                      onError={() => setError(true)}
                    />
                  ) : (
                    <span style={{ fontSize: "12px", fontWeight: "bold" }}>
                      AU
                    </span>
                  )}
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: lightTheme.palette.custom.darkBlue,
                      fontSize: "12px",
                      fontWeight: 700,
                    }}
                  >
                    {user.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: lightTheme.palette.custom.gray,
                      fontSize: "12px",
                    }}
                  >
                    {user.email}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body1" sx={{ fontSize: "14px" }}>
                {user.role}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "14px" }}>
                {user.status.toLowerCase() === "active" ? (
                  <span
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      padding: "2px 4px",
                      borderRadius: "4px",
                    }}
                  >
                    Active
                  </span>
                ) : (
                  <span
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      padding: "2px 4px",
                      borderRadius: "4px",
                    }}
                  >
                    Inactive
                  </span>
                )}
              </Typography>
            </>
          )}
        />

        <Column
          title="Vehicle"
          headers={["Trips", "Earnings"]}
          renderRow={(user) => (
            <>
              <Typography
                sx={{
                  color: lightTheme.palette.custom.darkBlue,
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                {user.vehicle}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "14px" }}>
                {user.trips}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "14px" }}>
                {user.Earnings}
              </Typography>
            </>
          )}
        />

        <Column
          title="Last Login"
          headers={["Actions"]}
          renderRow={(user) => (
            <>
              <Typography
                sx={{
                  color: lightTheme.palette.custom.darkBlue,
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                {user.lastLogin}
              </Typography>
              {user.role === "Admin" ? (
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    fontSize: "16px",
                    width: "100px",
                  }}
                >
                  <FaRegEdit />
                  <FaRegEye />
                  <RiDeleteBin6Line
                    style={{
                      color: lightTheme.palette.custom.red,
                    }}
                  />
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    fontSize: "16px",
                    width: "100px",
                  }}
                >
                  <FaRegEdit />
                  <FaRegEye />
                </Box>
              )}
            </>
          )}
        />
      </Box>
    </Box>
  );
}
    