import { stateTransfrom } from './transforms/stateTransfrom'
import storage from 'redux-persist/lib/storage'

export const persistConfig = {
  key: 'tracks',
  storage,
  version: 1,
  transforms: [stateTransfrom],
}
