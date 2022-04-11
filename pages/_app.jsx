import '../styles/globals.css'
import Script from 'next/script'
import Layout from '../components/layout'
import { store } from '../store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-TXMCECJXN7`}
        />
        <Script strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TXMCECJXN7', {
              page_path: window.location.pathname,
            });
                `}
        </Script>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
