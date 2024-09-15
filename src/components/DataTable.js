import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TextField,
  Button,
  TableSortLabel,
} from '@mui/material';

const DataTable = () => {
  const initialStreams = [
    { songName: 'Song Anthem', artist: 'John', dateStreamed: '2024-09-10', streamCount: 120, userId: 'U001' },
    { songName: 'Song Bella chao', artist: 'Doe', dateStreamed: '2024-09-09', streamCount: 105, userId: 'U002' },
    { songName: 'Song Cashew', artist: 'Alice', dateStreamed: '2024-09-08', streamCount: 98, userId: 'U003' },
    { songName: 'Song DingDing', artist: 'Wonder', dateStreamed: '2024-09-07', streamCount: 90, userId: 'U004' },
    { songName: 'Song Electrify', artist: 'Humpty', dateStreamed: '2024-09-06', streamCount: 85, userId: 'U005' },
  ];

  const [streams, setStreams] = useState(initialStreams);
  const [sortConfig, setSortConfig] = useState({ key: 'dateStreamed', direction: 'desc' });
  const [filters, setFilters] = useState({ artist: '', songName: '' });

  const handleSort = (key) => {
    const direction = sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key, direction });
  };

  const sortedStreams = [...streams].sort((a, b) => {
    if (sortConfig.direction === 'asc') {
      return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
    }
    return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
  });
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredStreams = sortedStreams.filter((stream) => {
    return (
      stream.artist.toLowerCase().includes(filters.artist.toLowerCase()) &&
      stream.songName.toLowerCase().includes(filters.songName.toLowerCase())
    );
  });

  return (
    <div style={{padding: '20px', backgroundColor: 'aliceblue' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Recent Streams
      </Typography>

      {/* Filter Inputs */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <TextField
          label="Filter by Artist"
          variant="outlined"
          name="artist"
          value={filters.artist}
          onChange={handleFilterChange}
        />
        <TextField
          label="Filter by Song Name"
          variant="outlined"
          name="songName"
          value={filters.songName}
          onChange={handleFilterChange}
        />
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={sortConfig.key === 'songName'}
                  direction={sortConfig.direction}
                  onClick={() => handleSort('songName')}
                >
                  Song Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortConfig.key === 'artist'}
                  direction={sortConfig.direction}
                  onClick={() => handleSort('artist')}
                >
                  Artist
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortConfig.key === 'dateStreamed'}
                  direction={sortConfig.direction}
                  onClick={() => handleSort('dateStreamed')}
                >
                  Date Streamed
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortConfig.key === 'streamCount'}
                  direction={sortConfig.direction}
                  onClick={() => handleSort('streamCount')}
                >
                  Stream Count
                </TableSortLabel>
              </TableCell>
              <TableCell>User ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredStreams.map((stream, index) => (
              <TableRow key={index}>
                <TableCell>{stream.songName}</TableCell>
                <TableCell>{stream.artist}</TableCell>
                <TableCell>{stream.dateStreamed}</TableCell>
                <TableCell>{stream.streamCount}</TableCell>
                <TableCell>{stream.userId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataTable;