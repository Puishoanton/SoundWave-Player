export interface IComment {
  _id: string
  username: string
  text: string
}
export type ITrack = {
  _id: string
  name: string
  artist: string
  text: string
  listens: number
  picture: string
  audio: string
  comments: IComment[]
}

export interface TrackState {
  tracks: ITrack[]
  error: string
}
