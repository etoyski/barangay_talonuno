import { Alert, Stack } from '@mui/material';
import React from 'react'

export default function Restrict() {
    return (
      <Stack sx={{ width: '100%' }} spacing={2}>
       <Alert variant="filled" severity="error">
        This is an error alert — check it out!
      </Alert>
      <Alert variant="filled" severity="warning">
        This is a warning alert — check it out!
      </Alert>
      <Alert variant="filled" severity="info">
        This is an info alert — check it out!
      </Alert>
      <Alert variant="filled" severity="success">
        This is a success alert — check it out!
      </Alert>

      </Stack>
    );
  }