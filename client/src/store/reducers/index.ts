import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import { persistConfig } from '../redux-persist/persistConfig'
import authSlice from './authSlice'
import playerSlice from './playerSlice'
import trackSlice from './trackSlice'

const rootReducer = combineReducers({
  playerSlice,
  trackSlice,
  authSlice
})

export const persistedReducer = persistReducer(persistConfig, rootReducer)

export type RootState = ReturnType<typeof rootReducer>
