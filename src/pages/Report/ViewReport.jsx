import { Paper, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import VerticalTabs from '../../components/Tabs/Tabs'

const ViewReport = () => {
     
  return (
   <>
       <VerticalTabs/>
 <Container maxwidth="md">
      
    <Typography variant="h4"> Activity Log</Typography>

        <Box>
            <Paper>
                <Typography>
                     Coming soon..
                </Typography>
            </Paper>
        </Box>
    </Container>
   </>
   
  )
}

export default ViewReport