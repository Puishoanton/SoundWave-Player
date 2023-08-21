import TrackList from '@/components/TrackList'
import { useAppSelector } from '@/hooks/redux'
import MainLayout from '@/layouts/MainLayout'
import { fetchTracksAction } from '@/store/asyncActions/getTracksAction'
import { Box, Button, Card, Grid } from '@mui/material'
import router from 'next/router'
import { NextThunkDispatch, wrapper } from '../../store'
import { GetServerSideProps } from 'next'

const Tracks = () => {
  const { tracks, error } = useAppSelector(state => state.trackSlice)

  if (error) {
    return (
      <MainLayout>
        <h1>{error}</h1>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <Grid container justifyContent='center'>
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent='space-between'>
              <h1>Track list</h1>
              <Button onClick={() => router.push('/tracks/create')}>Create track</Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  )
}

export default Tracks

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  store => async () => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(fetchTracksAction())

    return { props: {} }
  }
)
