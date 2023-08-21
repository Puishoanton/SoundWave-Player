import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchTracksError, removeTrack } from '../reducers/trackSlice'
import axios from 'axios'
import { removeTrackFromPlayer } from '../reducers/playerSlice'

export const deleteTrackAction = createAsyncThunk(
  'track/delete',
  async (id: string, { rejectWithValue, dispatch }) => {
    try {
      dispatch(removeTrack(id))
      dispatch(removeTrackFromPlayer(id))
      await axios.delete('http://localhost:5000/tracks/' + id)
    } catch (e) {
      dispatch(fetchTracksError('Error went wrong'))
      return rejectWithValue(e)
    }
  }
)
