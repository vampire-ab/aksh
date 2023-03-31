import Head from 'next/head'
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
