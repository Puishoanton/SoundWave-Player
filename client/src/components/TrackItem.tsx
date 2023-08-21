import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { setActiveTrack, setIsTrackPlaying, setPreviousTrack } from '@/store/reducers/playerSlice'
import { ITrack } from '@/types/track'
import { Delete, Pause, PlayArrow } from '@mui/icons-material'
import { Card, Grid, IconButton } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import styles from '../styles/TrackItem.module.scss'
import { deleteTrackAction } from '@/store/asyncActions/deleteTrack'
import { AsyncThunkAction } from '@reduxjs/toolkit'

interface TrackItemProps {
  track: ITrack
}

const TrackItem: FC<TrackItemProps> = ({ track }) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { previousTrack, isTrackPlaying, activeTrack } = useAppSelector(state => state.playerSlice)

  const chooseTrack = () => {
    if (track._id !== previousTrack?._id) {
      dispatch(setActiveTrack(track))
      dispatch(setIsTrackPlaying(true))
      dispatch(setPreviousTrack(track))
    } else {
      dispatch(setIsTrackPlaying(!isTrackPlaying))
    }
  }

  const deleteTrackhandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    dispatch(deleteTrackAction(track._id) as any)
  }

  return (
    <Card className={styles.track} onClick={() => router.push(`/tracks/${track._id}`)}>
      <IconButton
        onClick={e => {
          e.stopPropagation()
          chooseTrack()
        }}>
        {activeTrack?._id !== track._id || !isTrackPlaying ? <PlayArrow /> : <Pause />}
      </IconButton>
      <Image
        src={'http://localhost:5000/' + track.picture}
        alt='Track picture'
        width={70}
        height={70}
      />
      <Grid container direction={'column'} className={styles.title}>
        <h2>{track.name}</h2>
        <h3>{track.artist}</h3>
      </Grid>
      <IconButton className={styles.delete} onClick={deleteTrackhandler}>
        <Delete />
      </IconButton>
    </Card>
  )
}

export default TrackItem
