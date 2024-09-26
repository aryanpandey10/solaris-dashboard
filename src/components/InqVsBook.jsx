import * as React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import QuestionMarkIcon from "@mui/icons-material/Help";
import { CardTitle } from "reactstrap";

const settings = {
  width: 200,
  height: 200,
};

const InqVsBook = () => {
  // Dummy data
  const inquiries = 180; // Example: total number of inquiries
  const bookings = 60; // Example: total number of bookings

  // Calculate the booking percentage
  const bookingPercentage = ((bookings / inquiries) * 100).toFixed(2);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        padding: 2,
      }}
    >
      <CardTitle
        tag="h5"
        style={{
          textAlign: "left",
          display: "flex",
          justifyContent: "start", // Horizontal alignment
        }}
        className="m-0 p-0"
      >
        <QuestionMarkIcon
          style={{ verticalAlign: "middle", marginRight: "8px" }}
        />
        Inquiries V/S Book
      </CardTitle>
      {/* Gauge chart for displaying the ratio */}
      <Gauge
        {...settings}
        value={bookingPercentage}
        cornerRadius="50%"
        max={100} // Set max value as 100 (for percentage)
        sx={(theme) => ({
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: 40, // Font size for percentage text
            "&::after": {
              content: '"%"', // Adds percentage sign after the value
              fontSize: "inherit",
            },
          },
          [`& .${gaugeClasses.valueArc}`]: {
            fill: "#52b202", // Arc color
          },
          [`& .${gaugeClasses.referenceArc}`]: {
            fill: theme.palette.text.disabled,
          },
        })}
      />

      {/* Booked percentage text */}

      {/* Table to display inquiry and booking numbers */}
      <TableContainer sx={{ marginTop: 0 }}>
        <Table
          aria-label="simple table"
          sx={{ backgroundColor: "transparent" }}
        >
          <TableBody>
            <TableRow>
              {/* First Column: Inquiries */}
              <TableCell align="center" sx={{ padding: "5px" }}>
                <Typography variant="h6" sx={{ fontSize: "18px" }}>
                  {inquiries}
                </Typography>{" "}
                <Typography
                  variant="caption"
                  sx={{ color: "gray", fontSize: "14px" }}
                >
                  Inquiries
                </Typography>{" "}
              </TableCell>

              {/* Second Column: Bookings */}
              <TableCell align="center" sx={{ padding: "5px" }}>
                <Typography variant="h6" sx={{ fontSize: "18px" }}>
                  {bookings}
                </Typography>{" "}
                <Typography
                  variant="caption"
                  sx={{ color: "gray", fontSize: "14px" }}
                >
                  Bookings
                </Typography>{" "}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default InqVsBook;
