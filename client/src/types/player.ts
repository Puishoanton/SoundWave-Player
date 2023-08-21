import { ITrack } from './track'

export type TPlayer = {
  currentTime: number
  duration: number
  activeTrack: null | ITrack
  previousTrack: null | ITrack
  volume: number
  isTrackPlaying: boolean
}
