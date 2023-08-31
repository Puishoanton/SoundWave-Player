import FileUpload from '@/components/FileUpload'
import StepWrapper from '@/components/StepWrapper'
import { useInput } from '@/hooks/useInput'
import $api from '@/http'
import MainLayout from '@/layouts/MainLayout'
import { Button, Grid, TextField } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'

const CreateTrack = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [picture, setPicture] = useState(null)
  const [audio, setAudio] = useState(null)
  const track = useInput('')
  const artist = useInput('')
  const lyrics = useInput('')
  const router = useRouter()

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep(prev => prev + 1)
    } else {
      const body = new FormData()
      body.append('name', track.value)
      body.append('artist', artist.value)
      body.append('text', lyrics.value)
      body.append('picture', picture || 'picture undefined')
      body.append('audio', audio || 'audio undefined')
      console.log(body)
      $api
        .post('http://localhost:5000/tracks', body)
        .then(_ => router.push('/tracks'))
        .catch(e => console.log(e))
    }
  }
  const back = () => {
    setActiveStep(prev => prev - 1)
  }

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        <Grid display={'flex'} justifyContent={'center'}>
          {activeStep === 0 && (
            <Grid container direction={'column'} style={{ padding: 20 }}>
              <TextField {...track} label='Track name' />
              <TextField {...artist} label='Artist' />
              <TextField {...lyrics} label='Track lyrics' />
            </Grid>
          )}
          {activeStep === 1 && (
            <FileUpload setFile={setPicture} accept='image/*'>
              <Button>Upload picture</Button>
            </FileUpload>
          )}
          {activeStep === 2 && (
            <FileUpload setFile={setAudio} accept='audio/*'>
              <Button>Upload audio</Button>
            </FileUpload>
          )}
        </Grid>
      </StepWrapper>
      <Grid container justifyContent='space-between'>
        <Button disabled={activeStep === 0} onClick={back}>
          Back
        </Button>
        <Button onClick={next}>Next</Button>
      </Grid>
    </MainLayout>
  )
}

export default CreateTrack
