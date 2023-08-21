import { AppProps } from 'next/app'
import { FC } from 'react'
import { Provider } from 'react-redux'
import { persistor, wrapper } from '../store/index'
import { PersistGate } from 'redux-persist/integration/react'

const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest)

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...props.pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
