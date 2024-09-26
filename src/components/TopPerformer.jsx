import React from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"; // Trophy icon for Top Performer
import { CardTitle } from "reactstrap";

const performers = [
  { name: "David", image: "https://via.placeholder.com/50" }, // Placeholder image for David
  { name: "Andy", image: "https://via.placeholder.com/50" }, // Placeholder image for Andy
  { name: "Jack", image: "https://via.placeholder.com/50" }, // Placeholder image for Jack
];

const TopPerformer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        // backgroundColor: "#ffeb3b", // Yellow background like other cards
        padding: "8px",
        // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Card shadow effect
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Heading with Icon */}
      <Box display="flex" alignItems="center" mb={2}>
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            alignItems: "center",
            fontWeight: "bold",
            color: "#131416",
          }}
        >
          <EmojiEventsIcon
            style={{
              verticalAlign: "middle",
              marginRight: "8px",
              color: "#131416",
            }} // Trophy icon with gold color
          />
          Top Performer
        </Typography>
      </Box>

      {/* List of Performers */}
      <List>
        {performers.map((performer, index) => (
          <ListItem key={index} sx={{ padding: "8px 0" }}>
            <ListItemAvatar>
              <Avatar
                alt={performer.name}
                src={performer.image}
                sx={{ width: 70, height: 70, border: "2px solid #098442" }} // Set avatar size with border
              />
            </ListItemAvatar>
            <ListItemText
              primary={performer.name}
              primaryTypographyProps={{
                fontWeight: "bold",
                color: "#000",
                fontSize: 30,
                marginLeft: 3,
              }} // Bold performer name
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TopPerformer;
