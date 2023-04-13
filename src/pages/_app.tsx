import '/src/styles/global.sass'
import '/src/styles/global-media.sass'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
