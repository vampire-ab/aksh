import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import Carousel from "../components/carousel"
import Contact from '../components/contact'
import WhyUs from '../components/whyUs'
import Main from '../components/main'
import Services from '../components/services'
import Invest from '../components/invest'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aksh Investment</title>
        <meta name="Aksh Investment" content="Mutual Funds, Portfolio Management, Technical Analysis, Stock Market, Trading" />
        <link rel="icon"  />
      </Head>
      <Navbar />
      <Invest />
      <Main />
      <Services />
      
      {/* <WhyUs /> */}
      {/* <Carousel /> */}
      {/* <Contact />
      <Footer /> */}
    </div>
  )
}
