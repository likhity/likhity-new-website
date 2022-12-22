import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.scss'
import AlertsProvider from '../contexts/AlertsContext'

function MyApp({ Component, pageProps }) {
  return (
    <AlertsProvider>
      <Component {...pageProps} />
    </AlertsProvider>
  )
}

export default MyApp
