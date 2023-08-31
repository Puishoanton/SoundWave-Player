import storage from 'redux-persist/lib/storage'
import { stateTransfrom } from './transforms/stateTransfrom'

export const persistConfig = {
  key: 'tracks',
  storage,
  version: 1,
  transforms: [stateTransfrom],
}
