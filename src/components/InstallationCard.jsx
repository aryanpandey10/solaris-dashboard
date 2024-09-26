import React, { useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CardTitle } from "reactstrap";
import { Box } from "@mui/material";
import BuildIcon from "@mui/icons-material/Build"; // Import Build Icon

const InstallationCard = () => {
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
            { label: "Tue", value: 7 },
            { label: "Wed", value: 4 },
            { label: "Thu", value: 8 },
            { label: "Fri", value: 6 },
            { label: "Sat", value: 3 },
            { label: "Sun", value: 5 },
          ],
          MT: [
            { label: "Week 1", value: 20 },
            { label: "Week 2", value: 30 },
            { label: "Week 3", value: 40 },
            { label: "Week 4", value: 50 },
          ],
          YR: [
            { label: "Jan", value: 120 },
            { label: "Feb", value: 150 },
            { label: "Mar", value: 180 },
            { label: "Apr", value: 200 },
            { label: "May", value: 220 },
            { label: "Jun", value: 240 },
            { label: "Jul", value: 260 },
            { label: "Aug", value: 280 },
            { label: "Sep", value: 300 },
            { label: "Oct", value: 320 },
            { label: "Nov", value: 340 },
            { label: "Dec", value: 360 },
          ],
        };

        setChartData(dummyData[period]);
      } catch (error) {
        console.error("Error fetching installation data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [period]);

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };

  const totalInstallations = chartData.reduce(
    (total, item) => total + item.value,
    0
  );

  return (
    <div style={{ width: "100%" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <CardTitle tag="h5">
          <BuildIcon style={{ verticalAlign: "middle", marginRight: "8px" }} />
          Installations ({totalInstallations})
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
          yAxis={[{ label: "Installations" }]}
          series={[{ dataKey: "value", label: "Number of Installations" }]}
          height={300}
          borderRadius={10}
          barLabel="value"
        />
      )}
    </div>
  );
};

export default InstallationCard;
