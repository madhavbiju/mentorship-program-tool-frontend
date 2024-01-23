import { AspectRatio, Box, Breadcrumbs, Card, CardContent, Divider, Link, Stack, Typography } from '@mui/joy'
import React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

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
        <Box sx={{ display: 'flex',
    width: 400,
    height: 150,
    mb:2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'}}>
          <AspectRatio
        ratio="1"
        sx={{ minWidth: 130, borderRadius: '50%' }}
      >
                <img
                 src='/Assets/dp.png'
                 srcSet='/Assets/dp.png'
                 loading="lazy"
                  alt=""
                />
              </AspectRatio>
              <Stack sx={{ml:2}}>
                  <Typography level="title-lg">Hi,</Typography>
                         <Typography level="title-lg">Admin</Typography>
              </Stack>
        </Box>
        <Divider/>
        <Stack sx={{display: 'flex',flexDirection: 'row', justifyContent: 'space-between', mt: 2}}>
        <Card variant="soft" sx={{ width: 1/3 }}>
      <div>
        <Typography level="title-lg">Active Mentor Count</Typography>
      </div>
      <CardContent orientation="horizontal">
        <div>
          <Typography fontSize="lg" fontWeight="lg">
            10
          </Typography>
        </div>
      </CardContent>
    </Card>
    <Card variant="soft" sx={{ width: 1/3, mx:2 }}>
      <div>
        <Typography level="title-lg">Active Mentee Count</Typography>
      </div>
      <CardContent orientation="horizontal">
        <div>
          <Typography fontSize="lg" fontWeight="lg">
            10
          </Typography>
        </div>
      </CardContent>
    </Card>
    <Card variant="soft" sx={{ width: 1/3 }}>
      <div>
        <Typography level="title-lg">Active Pair Count</Typography>
      </div>
      <CardContent orientation="horizontal">
        <div>
          <Typography fontSize="lg" fontWeight="lg">
            10
          </Typography>
        </div>
      </CardContent>
    </Card>
        </Stack>
    </Box>
  )
}

export default AdminDashboard
