import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchTracks, fetchTracksError } from '../reducers/trackSlice'
import { ITrack } from '@/types/track'
import axios from 'axios'

export const fetchTracksAction = createAsyncThunk(
  'get_track',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get<ITrack[]>('http://localhost:5000/tracks')
      dispatch(fetchTracks(response.data))
    } catch (e) {
      dispatch(fetchTracksError('Error went wrong during fetching tracks'))
      return rejectWithValue(e)
    }
  }
)
