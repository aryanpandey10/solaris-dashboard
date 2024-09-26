import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Box } from "@mui/material";
import { CardTitle } from "reactstrap";

const bookingData = [2000, 1500, 2200, 2800, 200, 300]; // Dummy booking data
const inquiryData = [9000, 4000, 3500, 3600, 2900, 3900]; // Dummy inquiry data
const xLabels = ["NSW", "QLD", "ACT", "WA", "SA", "VIC"]; // Australian states

export default function AusState() {
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
        Inquiries V/S Bookings
      </CardTitle>
      <LineChart
        height={400} // Set chart height
        series={[
          {
            data: bookingData,
            label: "Bookings",
            yAxisId: "leftAxisId",
            area: true, // Enable area for stacked area chart
            stack: "total", // Stack this series
            showMark: false,
            color: "#FFCD04", // Green for bookings
          },
          {
            data: inquiryData,
            label: "Inquiries",
            yAxisId: "rightAxisId",
            area: true, // Enable area for stacked area chart
            stack: "total", // Stack this series
            showMark: false,
            color: "#098442", // Orange for inquiries
          },
        ]}
        xAxis={[{ scaleType: "point", data: xLabels }]} // X-axis for states
        yAxis={[
          { id: "leftAxisId", label: "Bookings" }, // Y-axis for bookings
          { id: "rightAxisId", label: "Inquiries" }, // Y-axis for inquiries
        ]}
        margin={{ left: 70 }}
        rightAxis="rightAxisId"
      />
    </Box>
  );
}
