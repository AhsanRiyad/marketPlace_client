import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/layout/footer';
import Header from '../components/layout/header';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
      <Header/>

      </div>
      <div>
        this is index...
      </div>

      <Footer/>

    </div>
  )
}
