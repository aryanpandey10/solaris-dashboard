import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Box, Typography, Grid } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/Help";
import { CardTitle } from "reactstrap";

const InquirySource = () => {
  const data = [
    { label: "FB", value: 30 },
    { label: "FB MESSENGER", value: 20 },
    { label: "FREE QUOTE", value: 25 },
    { label: "INSTA MESSENGER", value: 15 },
    { label: "REFERRAL", value: 5 },
    { label: "TOLLFREE", value: 3 },
    { label: "WEBSITE", value: 2 },
  ];

  // Calculate the total inquiries
  const totalInquiries = data.reduce((total, item) => total + item.value, 0);

  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
        position: "relative",
        padding: 2,
      }}
    >
      {/* Align heading to the left */}
      <CardTitle tag="h5" style={{ textAlign: "left" }}>
        <QuestionMarkIcon
          style={{ verticalAlign: "middle", marginRight: "8px" }}
        />
        Inquiries Source ({totalInquiries})
      </CardTitle>

      {/* Center the Pie Chart */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // This will center the chart horizontally
          alignItems: "center",
          height: "300px", // Ensure enough height for centering vertically
          paddingTop: "20px", // Optional padding for spacing above the chart
        }}
      >
        <Box
          sx={{
            display: "inline-block",
            width: "300px",
            height: "300px",
          }}
        >
          <PieChart
            height={300}
            width={400}
            slotProps={{
              legend: { hidden: true },
            }}
            series={[
              {
                data: data,
                innerRadius: 70, // Doughnut effect
                arcLabel: (params) => `${params.value}`, // Show value inside the segment
                arcLabelMinAngle: 20,
                label: { visible: false }, // Disable default label outside
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default InquirySource;
