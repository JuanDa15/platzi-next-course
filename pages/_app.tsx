import { AppProps } from 'next/app';
import '@assets/css/normalize.css';
import '../styles.css';
import Layout from '@components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  // Providers - Context/Providers, Theme, data
  // Layout
  // Aditional props
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}