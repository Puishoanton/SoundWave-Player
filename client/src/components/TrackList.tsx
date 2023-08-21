import { FC } from 'react'
import TrackItem from './TrackItem'
import { ITrack } from '@/types/track'
import { Grid, Box } from '@mui/material'

const TrackList: FC<{ tracks: ITrack[] }> = ({ tracks }) => {
  return (
    <Grid>
      <Box p={2}>
        {tracks.map(track => (
          <TrackItem key={track._id} track={track} />
        ))}
      </Box>
    </Grid>
  )
}

export default TrackList
