import { AnyAction, Dispatch, Store, ThunkDispatch, configureStore } from '@reduxjs/toolkit'
import { MakeStore, createWrapper } from 'next-redux-wrapper'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from 'redux-persist'
import { RootState, persistedReducer } from './reducers'

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
export type AppDispatch = ThunkDispatch<AppStore, null | undefined, AnyAction> & Dispatch<AnyAction>

export const wrapper = createWrapper<Store<RootState>>(makeStore)

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>
