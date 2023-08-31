import TrackList from '@/components/TrackList'
import { useAppSelector } from '@/hooks/redux'
import MainLayout from '@/layouts/MainLayout'
import { authMiddleware } from '@/middleware/auth.middleware'
import { fetchTracksAction } from '@/store/asyncActions/TrackActions'
import { Box, Button, Card, Grid } from '@mui/material'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import { AppStore, NextThunkDispatch, wrapper } from '../../store'

const Tracks = () => {
  const { tracks, error } = useAppSelector(state => state.trackSlice)
  const router = useRouter()

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
  (store: AppStore) => async (context: GetServerSidePropsContext) => {
    console.log(context.req.headers)
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(fetchTracksAction())
    return {
      props: {},
    }
  }
)
