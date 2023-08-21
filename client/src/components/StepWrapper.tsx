import { Card, Container, Grid, Step, StepLabel, Stepper } from '@mui/material'
import React, { FC } from 'react'

const steps = ['Track info', 'Track picture', 'Track audio']

const StepWrapper: FC<{ activeStep: number; children: any }> = ({ activeStep, children }) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index} completed={activeStep > index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container justifyContent='center' style={{ margin: '70px 0 ', height: 270 }}>
        <Card style={{ width: 600 }}>{children}</Card>
      </Grid>
    </Container>
  )
}

export default StepWrapper
