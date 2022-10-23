import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import Carousel from "../components/carousel"
import Contact from '../components/contact'
import Faq from '../components/faq'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aksh Investment</title>
        <meta name="Aksh Investment" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Faq />
      <Carousel />
      <Contact />
      <Footer />
    </div>
  )
}
