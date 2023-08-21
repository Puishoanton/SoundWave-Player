import { combineReducers } from '@reduxjs/toolkit'
import playerSlice from './playerSlice'
import trackSlice from './trackSlice'
import { persistConfig } from '../redux-persist/persistConfig'
import { persistReducer } from 'redux-persist'
import { HYDRATE } from 'next-redux-wrapper'

const rootReducer = combineReducers({
  playerSlice,
  trackSlice,
})

export const persistedReducer = persistReducer(persistConfig, rootReducer)

export type RootState = ReturnType<typeof rootReducer>
