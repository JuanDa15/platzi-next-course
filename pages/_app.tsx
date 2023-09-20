import { AppProps, NextWebVitalsMetric } from 'next/app';
import '@assets/css/normalize.css';
import '../styles.css';
import Layout from '@components/Layout';

export function reportWebVitals(metric) {
  console.log(metric)
}

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