import { persistor } from '@/store'
import { createTransform } from 'redux-persist'

export const stateTransfrom = createTransform(
  (inboundState, key) => {
    return inboundState
  },
  (outboundState, key) => {
    persistor.persist()
    return outboundState
  }
)
