import { AnyAction, Store, ThunkDispatch, configureStore } from '@reduxjs/toolkit'
import { MakeStore, createWrapper } from 'next-redux-wrapper'
import { RootState, persistedReducer } from './reducers'
import thunk from 'redux-thunk'
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { persistStore } from 'redux-persist'

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const makeStore: MakeStore<Store<RootState>> = () => {
  return store
}

export const persistor = persistStore(store)
export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']

export const wrapper = createWrapper<Store<RootState>>(makeStore)

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>
