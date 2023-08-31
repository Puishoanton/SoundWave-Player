import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import {
  setCurrentTime,
  setDuration,
  setIsTrackPlaying,
  setVolume,
} from '@/store/reducers/playerSlice'
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material'
import { Grid, IconButton } from '@mui/material'
import { useEffect } from 'react'
import styles from '../styles/Player.module.scss'
import TrackProgress from './TrackProgress'

let audio: HTMLAudioElement

const Player = () => {
  const dispatch = useAppDispatch()
  const { activeTrack, isTrackPlaying, volume, currentTime, duration, previousTrack } =
    useAppSelector(state => state.playerSlice)
  const { tracks } = useAppSelector(state => state.trackSlice)

  useEffect(() => {
    // if (activeTrack) {
    if (audio) {
      const isTrackRemoved = tracks.some(
        track => track.audio === audio.src.replace('http://localhost:5000/', '')
      )
      if (isTrackRemoved) {
        stopTrack()
      }
      if (!isTrackPlaying) {
        stopTrack()
        return
      }
      if (
        isTrackPlaying &&
        currentTime !== 0 &&
        audio.src === 'http://localhost:5000/' + activeTrack?.audio
      ) {
        startTrack()
        return
      }
      stopTrack()
      audio = new Audio()
      audio.src = 'http://localhost:5000/' + activeTrack?.audio
      audio.volume = 1
      audio.volume = volume / 100
      audio.onloadedmetadata = () => {
        dispatch(setDuration(Math.ceil(audio.duration)))
      }
      audio.ontimeupdate = () => {
        dispatch(setCurrentTime(Math.ceil(audio.currentTime)))
      }
      startTrack()
    } else {
      audio = new Audio()
      audio.src = 'http://localhost:5000/' + activeTrack?.audio
      audio.volume = 1
      audio.volume = volume / 100
      audio.onloadedmetadata = () => {
        dispatch(setDuration(Math.ceil(audio.duration)))
      }
      audio.ontimeupdate = () => {
        dispatch(setCurrentTime(Math.ceil(audio.currentTime)))
      }
      startTrack()
      // }
    }
    // else {
    // const isTrackRemoved = tracks.some(track => console.log(track.audio === audio.src))
    // if (isTrackRemoved) {
    //   stopTrack()
    // }
    // }
  }, [activeTrack, isTrackPlaying, previousTrack])

  const resetAfterRemoving = () => {}

  const startTrack = () => {
    dispatch(setIsTrackPlaying(true))
    return audio.play()
  }
  const stopTrack = () => {
    dispatch(setIsTrackPlaying(false))
    return audio.pause()
  }

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100
    dispatch(setVolume(Number(e.target.value)))
  }
  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value)
    dispatch(setCurrentTime(Number(e.target.value)))
  }

  return (
    <div className={styles.player}>
      {activeTrack && (
        <>
          <IconButton onClick={!isTrackPlaying ? startTrack : stopTrack}>
            {!isTrackPlaying ? <PlayArrow /> : <Pause />}
          </IconButton>
          <Grid container direction='column' style={{ width: 200, margin: '0 20px' }}>
            <div>{activeTrack?.name}</div>
            <div style={{ fontSize: 12, color: 'gray' }}>{activeTrack?.artist}</div>
          </Grid>
          <TrackProgress
            isTime={true}
            current={currentTime}
            max={duration}
            onChange={changeCurrentTime}
          />
          <VolumeUp style={{ marginLeft: 'auto' }} />
          <TrackProgress current={volume} max={100} onChange={changeVolume} />
        </>
      )}
    </div>
  )
}

export default Player
