import 'semantic-ui-css/semantic.min.css'
// import '@/styles/globals.css'
import '@/scss/global.scss';
import {AuthProvider} from '@/context/AuthContext';




export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
