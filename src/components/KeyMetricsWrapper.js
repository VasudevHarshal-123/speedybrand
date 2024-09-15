import React, { useEffect, useState } from 'react';
import { Grid, Container } from '@mui/material';
import KeyMetricCard from './KeyMetricCard';
import PeopleIcon from '@mui/icons-material/People';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import StarIcon from '@mui/icons-material/Star';

const KeyMetricsWrapper = () => {
  // Target values for metrics
  const targetData = {
    totalUsers: 120000,
    activeUsers: 45000,
    totalStreams: 1234567,
    revenue: 98000,
    topArtist: 'Adele', // Top artist will not be animated
  };

  // Initial states
  const [data, setData] = useState({
    totalUsers: 0,
    activeUsers: 0,
    totalStreams: 0,
    revenue: 0,
    topArtist: '',
  });

  useEffect(() => {
    const duration = 2000; // 2 seconds for the animation duration
    const step = 50; // Step to increment numbers
    const interval = setInterval(() => {
      setData((prevData) => {
        const nextData = {
          totalUsers: Math.min(prevData.totalUsers + Math.floor(targetData.totalUsers / step), targetData.totalUsers),
          activeUsers: Math.min(prevData.activeUsers + Math.floor(targetData.activeUsers / step), targetData.activeUsers),
          totalStreams: Math.min(prevData.totalStreams + Math.floor(targetData.totalStreams / step), targetData.totalStreams),
          revenue: Math.min(prevData.revenue + Math.floor(targetData.revenue / step), targetData.revenue),
          topArtist: targetData.topArtist, // Artist is not animated
        };
        if (
          nextData.totalUsers === targetData.totalUsers &&
          nextData.activeUsers === targetData.activeUsers &&
          nextData.totalStreams === targetData.totalStreams &&
          nextData.revenue === targetData.revenue
        ) {
          clearInterval(interval); // Stop interval when target values are reached
        }
        return nextData;
      });
    }, duration / step); // Control the speed of counting

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <Container>
      <Grid container justifyContent="center">
        <KeyMetricCard
          title="Total Users"
          value={data.totalUsers}
          icon={<PeopleIcon />}
        />
        <KeyMetricCard
          title="Active Users"
          value={data.activeUsers}
          icon={<PeopleIcon />}
        />
        <KeyMetricCard
          title="Total Streams"
          value={data.totalStreams}
          icon={<PlayArrowIcon />}
        />
        <KeyMetricCard
          title="Revenue"
          value={`$${data.revenue}`}
          icon={<MonetizationOnIcon />}
        />
        <KeyMetricCard
          title="Top Artist"
          value={data.topArtist}
          icon={<StarIcon />}
        />
      </Grid>
    </Container>
  );
};

export default KeyMetricsWrapper;
