import { ITrack } from '@/types/track'
import { Box, Grid } from '@mui/material'
import { FC } from 'react'
import TrackItem from './TrackItem'

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
