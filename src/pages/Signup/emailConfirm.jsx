import { Paper, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'

const emailConfirm = () => {
  return (
    <Box bgcolor="#f2f4fb" mt={2} pb={10} height="100vh">
    <Container>
        <Paper>
            <Typography>
                Account Verification, Please Check Your Email To Proceed.
            </Typography>
        </Paper>
    </Container>
</Box>
  )
}

export default emailConfirm