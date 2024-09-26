import React from "react";
import { Box, Typography } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction"; // Icon for solar installation
import WarningIcon from "@mui/icons-material/Warning"; // Icon in the heading
import { CardTitle } from "reactstrap";

const InstallationPending = ({ pendingInstallations }) => {
  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "left",
        // padding: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", // Space between the number and icon
        // backgroundColor: "#ffeb3b", // Use yellow background to match card style
      }}
    >
      {/* Heading with Icon */}
      <Box>
        <Box display="flex" alignItems="center" mb={2}>
          <CardTitle tag="h5" sx={{ display: "flex", alignItems: "center" }}>
            <WarningIcon
              style={{ verticalAlign: "middle", marginRight: "8px" }}
            />
            Installation Pending
          </CardTitle>
        </Box>

        {/* Number of Pending Installations */}
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
          {pendingInstallations}
        </Typography>
      </Box>

      {/* Icon for Solar Installation */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center", // Center the icon vertically
          height: "100%", // Full height of the card
        }}
      >
        <ConstructionIcon sx={{ color: "#ff9800", fontSize: 60 }} />
      </Box>
    </Box>
  );
};

export default InstallationPending;
