import { AspectRatio, Box, Breadcrumbs, Card, CardContent, Divider, Grid, Link, Stack, Typography } from '@mui/joy'
import React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import CountCard from '../../../components/CountCard/CountCard';
import DashboardTable from '../../../components/DashboardTable/DashboardTable';
import GreetCard from '../../../components/GreetCard/GreetCard';
import RequestBox from '../../../components/RequestBox/RequestBox';

const AdminDashboard = () => {
    

  return (
    <Box sx={{ width:'100%'}}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Breadcrumbs
              size="sm"
              aria-label="breadcrumbs"
              separator={<ChevronRightRoundedIcon/>}
              sx={{ pl: 0 }}
            >
              <Link
                underline="none"
                color="neutral"
                href="#some-link"
                aria-label="Home"
              >
                <HomeRoundedIcon />
              </Link>

            </Breadcrumbs>
          </Box>
       <GreetCard/>
        <Divider/>
        <Stack sx={{display: 'flex',flexDirection: 'row', justifyContent: 'space-between', mt: 2}}>
        <CountCard title={'Active Mentor Count'} count={9}   sx={(theme) => ({
            width:1/3
      })}></CountCard>
       <CountCard title={'Active Mentee Count'} count={10}   sx={(theme) => ({
            width:1/3, mx:2
      })}></CountCard>
       <CountCard title={'Active Pair Count'} count={11}   sx={(theme) => ({
            width:1/3
      })}></CountCard>
        </Stack>
        <Grid container>
          <Grid xs={12} lg={8}>
          <DashboardTable/>
          </Grid>
          <Grid xs={12} lg={3}>
            <RequestBox/>
            </Grid>
        </Grid>
    </Box>
  )
}

export default AdminDashboard
