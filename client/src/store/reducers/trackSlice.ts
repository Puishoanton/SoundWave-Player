import { ITrack, TrackState } from '@/types/track'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

export const trackInitialState: TrackState = { tracks: [], error: '' }

const trackSlice = createSlice({
  name: 'track',
  initialState: trackInitialState,
  reducers: {
    fetchTracksError(state, action: PayloadAction<string>) {
      state.error = action.payload
    },
    fetchTracks(state, action: PayloadAction<ITrack[]>) {
      state.tracks = action.payload
    },
    removeTrack(state, action: PayloadAction<string>) {
      // state.tracks = state.tracks.filter(track => {
      //   track._id !== action.payload
      // })

      state.tracks = [...state.tracks.filter(track => track._id !== action.payload)]
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action: PayloadAction<any>) => {
      const tracks = action.payload.trackSlice.tracks
      state.tracks = tracks
    },
  },
})
export const { fetchTracks, fetchTracksError, removeTrack } = trackSlice.actions
export default trackSlice.reducer
