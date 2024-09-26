import React, { useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CardTitle } from "reactstrap";
import { Box } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/Help"; // Import Question Mark Icon

const InquiryCard = () => {
  const [period, setPeriod] = useState("WK");
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const dummyData = {
          WK: [
            { label: "Mon", value: 3 },
            { label: "Tue", value: 4 },
            { label: "Wed", value: 2 },
            { label: "Thu", value: 5 },
            { label: "Fri", value: 6 },
            { label: "Sat", value: 2 },
            { label: "Sun", value: 4 },
          ],
          MT: [
            { label: "Week 1", value: 10 },
            { label: "Week 2", value: 15 },
            { label: "Week 3", value: 20 },
            { label: "Week 4", value: 25 },
          ],
          YR: [
            { label: "Jan", value: 50 },
            { label: "Feb", value: 60 },
            { label: "Mar", value: 70 },
            { label: "Apr", value: 80 },
            { label: "May", value: 90 },
            { label: "Jun", value: 100 },
            { label: "Jul", value: 110 },
            { label: "Aug", value: 120 },
            { label: "Sep", value: 130 },
            { label: "Oct", value: 140 },
            { label: "Nov", value: 150 },
            { label: "Dec", value: 160 },
          ],
        };

        setChartData(dummyData[period]);
      } catch (error) {
        console.error("Error fetching inquiry data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [period]);

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };

  const totalInquiries = chartData.reduce(
    (total, item) => total + item.value,
    0
  );

  return (
    <div style={{ width: "100%" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <CardTitle tag="h5">
          <QuestionMarkIcon
            style={{ verticalAlign: "middle", marginRight: "8px" }}
          />
          Inquiries ({totalInquiries})
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
          yAxis={[{ label: "Inquiries" }]}
          series={[{ dataKey: "value", label: "Number of Inquiries" }]}
          height={300}
          borderRadius={10}
          barLabel="value"
        />
      )}
    </div>
  );
};

export default InquiryCard;
