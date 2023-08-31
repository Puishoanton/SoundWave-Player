import $api from '@/http'
import { TAuthResponseData, TCredentials } from '@/types/auth'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { login, setError } from '../reducers/authSlice'

export const loginAction = createAsyncThunk(
  'auth/login',
  async (formData: TCredentials, { rejectWithValue, dispatch }) => {
    try {
      const response = await $api.post<TAuthResponseData>('auth/login', formData)
      dispatch(login(response.data))
      localStorage.setItem('access_token', response.data.access_token)
    } catch (e: any) {
      console.log(e.response.data.message)
      dispatch(setError(e.response.data.message))
      setTimeout(() => {
        dispatch(setError(''))
      }, 5000)
      return rejectWithValue(e)
    }
  }
)

export const registerAction = createAsyncThunk(
  'auth/register',
  async (formData: TCredentials, { rejectWithValue, dispatch }) => {
    try {
      const response = await $api.post<TAuthResponseData>('auth/register', formData)
      dispatch(login(response.data))
      localStorage.setItem('access_token', response.data.access_token)
    } catch (e: any) {
      console.log(e.response.data.message)
      dispatch(setError(e.response.data.message))
      setTimeout(() => {
        dispatch(setError(''))
      }, 5000)
      return rejectWithValue(e)
    }
  }
)
