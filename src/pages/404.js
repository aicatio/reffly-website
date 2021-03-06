import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { web } from '@aicat/reffly';

export default function About() {
  console.log(web);

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Error 404 - Not found
        </Typography>
      </Box>
    </Container>
  );
}
