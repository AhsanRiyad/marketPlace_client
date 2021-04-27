import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/layout/footer';
import Header from '../components/layout/header';
import SearchIcon from '@material-ui/icons/Search';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <div className="bg-blue-50">
        <div className="grid grid-cols-6  text-black  place-content-center">
          <div className="col-start-2 col-span-2 mt-32">
            <div className="font-bold text-3xl">
              51,528 WordPress Themes & Website Templates From $2 
            </div>
            <div  className="mt-6">
              WordPress themes, web templates and more. Brought to you by the largest global community of creatives.
            </div>
            <div>
              <div className="mt-10	grid bg-white shadow-2xl px-2 rounded border " style={{ gridTemplateColumns: " 1fr 100px "  }}>
                    <input placeholder="e.g Responsive web design" className=" py-6 bg-white focus:outline-none mx-3"/>
                    <button className="bg-green-700 text-white px-3 rounded-lg my-3"> 
                      <SearchIcon/> 
                      Search
                    </button>
              </div>
            </div>
          </div>

          <div className="col-span-2 place-self-center">
            <img src="/static/search-header-1600749088571.webp"  className="mx-3"/>
          </div>

        </div>
      </div>
    </div>
  )
}
