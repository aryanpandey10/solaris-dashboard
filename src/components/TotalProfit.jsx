import React from "react";
import { Box, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"; // Icon for dollar sign

const TotalProfit = () => {
  // Dummy amount for profit
  const profitAmount = "$8,765";

  return (
    <Box
      sx={{
        width: "100%",
        // backgroundColor: "#FFCD04", // Add background color for consistency
        padding: "4px", // Increased padding for more space
        // borderRadius: "8px", // Rounded corners
        // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Add shadow for depth
        // border: "1px solid #ddd", // Border for a polished look
        textAlign: "left",
      }}
    >
      {/* Heading with Icon */}
      <Box display="flex" alignItems="center" mb={2}>
        <AttachMoneyIcon
          style={{
            marginRight: "8px",
            color: "#098442",
            fontSize: "24px", // Larger icon size
          }}
        />
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontSize: "1rem", // Adjust font size
            color: "#333", // Darker text for better contrast
          }}
        >
          Total Profit
        </Typography>
      </Box>

      {/* Dummy Amount */}
      <Typography
        variant="h3" // Larger and more prominent
        sx={{
          fontWeight: "bold",
          color: "#098442", // Green color to match the icon
          fontSize: "2rem", // Adjust size of the amount
        }}
      >
        {profitAmount}
      </Typography>
    </Box>
  );
};

export default TotalProfit;
