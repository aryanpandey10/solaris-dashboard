import React, { useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CardTitle } from "reactstrap";
import { Box } from "@mui/material";
import SunIcon from "@mui/icons-material/WbSunny"; // Import Sun Icon

const BookingCard = () => {
  const [period, setPeriod] = useState("WK");
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const dummyData = {
          WK: [
            { label: "Mon", value: 5 },
            { label: "Tue", value: 8 },
            { label: "Wed", value: 3 },
            { label: "Thu", value: 7 },
            { label: "Fri", value: 6 },
            { label: "Sat", value: 10 },
            { label: "Sun", value: 4 },
          ],
          MT: [
            { label: "Week 1", value: 15 },
            { label: "Week 2", value: 20 },
            { label: "Week 3", value: 25 },
            { label: "Week 4", value: 30 },
          ],
          YR: [
            { label: "Jan", value: 100 },
            { label: "Feb", value: 120 },
            { label: "Mar", value: 140 },
            { label: "Apr", value: 160 },
            { label: "May", value: 180 },
            { label: "Jun", value: 200 },
            { label: "Jul", value: 220 },
            { label: "Aug", value: 240 },
            { label: "Sep", value: 260 },
            { label: "Oct", value: 280 },
            { label: "Nov", value: 300 },
            { label: "Dec", value: 320 },
          ],
        };

        setChartData(dummyData[period]);
      } catch (error) {
        console.error("Error fetching booking data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [period]);

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };

  const totalBookings = chartData.reduce(
    (total, item) => total + item.value,
    0
  );

  return (
    <div style={{ width: "100%" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <CardTitle tag="h5">
          <SunIcon style={{ verticalAlign: "middle", marginRight: "8px" }} />
          Bookings ({totalBookings})
        </CardTitle>
        <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
          <Select
            value={period}
            onChange={handlePeriodChange}
            sx={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              "& .MuiSelect-select": {
                padding: "8px 12px",
                fontSize: "0.875rem",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#098442",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#098442",
              },
            }}
          >
            <MenuItem value="WK">This Week</MenuItem>
            <MenuItem value="MT">This Month</MenuItem>
            <MenuItem value="YR">This Year</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {loading ? (
        <p>Loading data...</p>
      ) : (
        <BarChart
          dataset={chartData}
          xAxis={[{ scaleType: "band", dataKey: "label" }]}
          yAxis={[{ label: "Bookings" }]}
          series={[{ dataKey: "value", label: "Number of Bookings" }]}
          height={300}
          borderRadius={10}
          barLabel="value"
        />
      )}
    </div>
  );
};

export default BookingCard;
