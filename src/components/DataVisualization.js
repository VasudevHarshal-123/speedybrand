// src/components/DataVisualization.js
import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import { Line, Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  BarElement,
  Tooltip,
  Legend
);

const DataVisualization = () => {
  // Data for User Growth (Line Chart)
  const userGrowthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Total Users',
        data: [50000, 52000, 56000, 60000, 64000, 68000, 70000, 74000, 78000, 81000, 85000, 90000],
        borderColor: '#3f51b5',
        fill: false,
      },
      {
        label: 'Active Users',
        data: [30000, 31000, 34000, 36000, 40000, 41000, 42000, 44000, 46000, 48000, 50000, 53000],
        borderColor: '#ff4081',
        fill: false,
      },
    ],
  };

  // Data for Revenue Distribution (Pie Chart)
  const revenueDistributionData = {
    labels: ['Subscriptions', 'Ads'],
    datasets: [
      {
        data: [65000, 35000],
        backgroundColor: ['#3f51b5', '#ff4081'],
      },
    ],
  };

  // Data for Top 5 Streamed Songs (Bar Chart)
  const topSongsData = {
    labels: ['Song A', 'Song B', 'Song C', 'Song D', 'Song E'],
    datasets: [
      {
        label: 'Stream Count',
        data: [12000, 10500, 9800, 9000, 8500],
        backgroundColor: '#3f51b5',
      },
    ],
  };

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" align="center">
            User Growth (Past 12 Months)
          </Typography>
          <Line data={userGrowthData} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" align="center">
            Revenue Distribution
          </Typography>
          <Pie data={revenueDistributionData} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" align="center">
            Top 5 Streamed Songs
          </Typography>
          <Bar data={topSongsData} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DataVisualization;
