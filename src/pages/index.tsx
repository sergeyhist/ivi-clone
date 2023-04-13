import Head from 'next/head'
import Banner from '../components/Banner/BannerSlider'
import Footer from '../components/Footer/Footer';
import Header from '/src/components/Header/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Иви</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='container'>
        <Header />
        <Banner />
        <Footer />
      </main>
    </>
  )
}
