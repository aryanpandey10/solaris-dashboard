import React from "react";
import { Box, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"; // Dollar icon
import WarningIcon from "@mui/icons-material/Warning"; // Icon in the heading
import { CardTitle } from "reactstrap";

const PaymentPending = ({ pendingPayment }) => {
  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", // Space between the number and icon
      }}
    >
      {/* Heading with Icon */}
      <Box>
        <Box display="flex" alignItems="center" mb={2}>
          <CardTitle tag="h5" sx={{ display: "flex", alignItems: "center" }}>
            <WarningIcon
              style={{ verticalAlign: "middle", marginRight: "8px" }}
            />
            Payment Pending
          </CardTitle>
        </Box>

        {/* Number of Pending Payments */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "#098442",
            padding: "0",
            margin: "0",
          }}
          className="p-0 m-0"
        >
          ${pendingPayment}
        </Typography>
      </Box>

      {/* Icon for Payment Pending */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center", // Center the icon vertically
          height: "100%", // Full height of the card
        }}
      >
        <AttachMoneyIcon sx={{ color: "#ff9800", fontSize: 60 }} />
      </Box>
    </Box>
  );
};

export default PaymentPending;
