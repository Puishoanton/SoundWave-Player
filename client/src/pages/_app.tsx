import { AppProps } from 'next/app'
import { FC } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, wrapper } from '../store/index'

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
