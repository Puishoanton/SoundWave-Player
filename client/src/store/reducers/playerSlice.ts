import { TPlayer } from '@/types/player'
import { ITrack } from '@/types/track'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const playerInitialState: TPlayer = {
  currentTime: 0,
  duration: 0,
  activeTrack: null,
  previousTrack: null,
  volume: 50,
  isTrackPlaying: false,
}

const playerSlice = createSlice({
  name: 'player',
  initialState: playerInitialState,
  reducers: {
    setIsTrackPlaying(state, action: PayloadAction<boolean>) {
      state.isTrackPlaying = action.payload
    },
    setCurrentTime(state, action: PayloadAction<number>) {
      state.currentTime = action.payload
    },
    setVolume(state, action: PayloadAction<number>) {
      state.volume = action.payload
    },
    setDuration(state, action: PayloadAction<number>) {
      state.duration = action.payload
    },
    setActiveTrack(state, action: PayloadAction<ITrack | null>) {
      state.activeTrack = action.payload
    },
    setPreviousTrack(state, action: PayloadAction<ITrack | null>) {
      state.previousTrack = action.payload
    },
    removeTrackFromPlayer(state, action: PayloadAction<string>) {
      if (state.activeTrack?._id === action.payload) {
        state.currentTime = 0
        state.duration = 0
        state.activeTrack = null
        state.isTrackPlaying = false
      }
    },
  },
})
export const {
  setIsTrackPlaying,
  setActiveTrack,
  setCurrentTime,
  setDuration,
  setVolume,
  setPreviousTrack,
  removeTrackFromPlayer,
} = playerSlice.actions

export default playerSlice.reducer
