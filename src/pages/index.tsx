import Head from 'next/head'
import Banner from '../components/Banner/Banner'

export default function Home() {
  return (
    <>
      <Head>
        <title>Иви</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner />
      </main>
    </>
  )
}
