import * as React from "react";
import { Box, Typography } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups"; // Icon to represent agents
import { BarChart } from "@mui/x-charts/BarChart";

// Dummy data for agents and bookings
const dataset = [
  { agent: "David", bookings: 25 },
  { agent: "Andy", bookings: 40 },
  { agent: "Jack", bookings: 35 },
  { agent: "Emily", bookings: 20 },
  { agent: "Sophia", bookings: 30 },
];

const chartSetting = {
  xAxis: [
    {
      label: "Number of Bookings",
      dataKey: "bookings", // Bind X-axis to 'bookings'
    },
  ],
  //   width: 500,
  height: 400,
  yAxis: [
    {
      scaleType: "band",
      dataKey: "agent", // Y-axis represents agent names
    },
  ],
};

export default function AgentBooking() {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "8px",
        textAlign: "left",
      }}
    >
      {/* Heading with Icon */}
      <Box display="flex" alignItems="center" mb={2}>
        <Typography
          variant="h6"
          sx={{ display: "flex", alignItems: "center", fontWeight: "bold" }}
        >
          <GroupsIcon
            style={{
              verticalAlign: "middle",
              marginRight: "8px",
              color: "#131416",
            }} // Agent icon with green color
          />
          Agent Bookings
        </Typography>
      </Box>

      {/* Bar Chart for Agent Bookings */}
      <BarChart
        dataset={dataset} // Dummy dataset for the chart
        yAxis={[{ scaleType: "band", dataKey: "agent" }]} // Y-axis shows agent names
        series={[{ dataKey: "bookings", label: "Bookings" }]} // Bars represent the number of bookings
        layout="horizontal" // Layout set to horizontal
        borderRadius={20}
        barLabel="value"
        {...chartSetting}
      />
    </Box>
  );
}
