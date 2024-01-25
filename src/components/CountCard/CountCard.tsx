import { Card, Typography, CardContent } from '@mui/joy'
import React from 'react'
import { CountCardPropsType } from './CountCardPropType'

const CountCard = ({ title, count, sx = [] }: CountCardPropsType) => {
  return (
    <Card variant="soft"
    sx={[
        {
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <div>
        <Typography level="title-lg">{title}</Typography>
      </div>
      <CardContent orientation="horizontal">
        <div>
          <Typography fontSize="lg" fontWeight="lg">
            {count}
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default CountCard
