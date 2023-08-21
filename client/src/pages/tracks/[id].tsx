import { useInput } from '@/hooks/useInput'
import MainLayout from '@/layouts/MainLayout'
import { ITrack } from '@/types/track'
import { Box, Button, Grid, TextField } from '@mui/material'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import styles from '../../styles/Track.module.scss'

const Track: FC<{ serverTrack: ITrack }> = ({ serverTrack }) => {
  const [track, setTrack] = useState(serverTrack)
  const username = useInput('')
  const comment = useInput('')
  const router = useRouter()

  const addComment = async () => {
    try {
      const response = await axios.post('http://localhost:5000/tracks/comment', {
        username: username.value,
        text: comment.value,
        trackId: track._id,
      })
      setTrack({ ...track, comments: [response.data, ...track.comments] })
      // username.resetInput()
      // comment.resetInput()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <MainLayout>
      <Button variant={'outlined'} style={{ fontSize: 32 }} onClick={() => router.push('/tracks')}>
        Back
      </Button>
      <Grid container flexDirection={'column'} className={styles.track}>
        <Grid container>
          <Image
            src={'http://localhost:5000/' + track.picture}
            alt='Track picture'
            width={200}
            height={200}
          />
          <div className={styles.title}>
            <h1>Track name - {track.name}</h1>
            <h1>Track artist - {track.artist}</h1>
            <h1>Listens - {track.listens}</h1>
          </div>
        </Grid>
        <Box>
          <h1>Track lyrics</h1>
          <p>{track.text}</p>
        </Box>
        <Box>
          <h1>Comments</h1>
          <TextField label='Username' fullWidth {...username} />
          <TextField label='Comment' fullWidth {...comment} />
          <Button onClick={addComment}>Comment</Button>
          {track.comments.map(comment => (
            <div key={comment._id}>
              <h2>{comment.username}</h2>
              <h2>{comment.text}</h2>
            </div>
          ))}
        </Box>
      </Grid>
    </MainLayout>
  )
}

export default Track

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await axios.get('http://localhost:5000/tracks/' + params?.id)
  return {
    props: {
      serverTrack: response.data,
    },
  }
}
