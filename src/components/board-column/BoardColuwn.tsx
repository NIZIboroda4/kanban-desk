import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import * as React from 'react';

export default function SimplePaper() {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 3,
          width: 330,
          height: 650,
        },
      }}
    >
      <Paper elevation={6} />
      <Paper elevation={6} />
      <Paper elevation={6} />
      <Paper elevation={6} />
      <Paper elevation={6} />
     
    </Box>
  );
}

