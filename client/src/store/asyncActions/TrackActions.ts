import { ITrack } from '@/types/track'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { removeTrackFromPlayer } from '../reducers/playerSlice'
import { fetchTracks, fetchTracksError, removeTrack } from '../reducers/trackSlice'
import $api from '@/http'

export const fetchTracksAction = createAsyncThunk(
  'tracks/fetch',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await $api.get<ITrack[]>('tracks')
      dispatch(fetchTracks(response.data))
    } catch (e: any) {
      console.log(e.response.data.message)
      dispatch(fetchTracksError(e.response.data.message))
      return rejectWithValue(e.response.data.message)
    }
  }
)

export const deleteTrackAction = createAsyncThunk(
  'tracks/delete',
  async (id: string, { rejectWithValue, dispatch }) => {
    try {
      dispatch(removeTrack(id))
      dispatch(removeTrackFromPlayer(id))
      await $api.delete('tracks/' + id)
    } catch (e: any) {
      console.log(e.response.data.message)
      dispatch(fetchTracksError(e.response.data.message))
      return rejectWithValue(e.response.data.message)
    }
  }
)
