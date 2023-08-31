import { TAuthResponseData, TAuthState } from '@/types/auth'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

const initialState: TAuthState = {
  isAuth: false,
  user: {} as TAuthResponseData,
  errors: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<TAuthResponseData>) {
      state.isAuth = true
      state.user = action.payload
    },
    setError(state, action: PayloadAction<string>) {
      state.errors = action.payload
    },
    logout(state) {
      state.isAuth = false
      state.user = {} as TAuthResponseData
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action: PayloadAction<any>) => {
      state.isAuth = state.isAuth
    },
  },
})

export const { login, logout, setError } = authSlice.actions
export default authSlice.reducer
