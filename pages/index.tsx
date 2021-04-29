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
            <img src="/static/search-header-1600749088571.webp" className="mx-3"/>
          </div>

          <div className="col-start-2 col-span-4 mt-24 mb-24">
            <div className="grid grid-cols-3 gap-3">

              <div >
                
                <div className="grid justify-center pt-12 text-center bg-green-100 rounded-xl group overflow-y-hidden cursor-pointer hover:bg-white transition delay-150 duration-300 ease-in-out ">
                  <h2 className="font-bold text-2xl">WordPress Themes</h2>
                  <p>Thousands of WordPress themes</p>
                  <div>
                    <a href="#" className="mx-2">newest</a>
                    <a href="#" className="mx-2">best seller</a>
                  </div>
                  <div className="mt-12 mx-10 bg-white p-1 rounded relative transform translate-y-10 group-hover:translate-y-9 group-hover:transform transition delay-150 duration-300 ease-in-out">
                    <img src="/static/category-tiles-wordpress.webp" />
                    <div className="absolute rounded-full flex items-center justify-center h-12 w-12 bg-red-100 " style={{ left: '44%' , top: '-20px' }}>WP</div>
                  </div>
                </div>

              </div>


              <div className="bg-yellow-100 rounded-xl">
                <div >

                  <div className="grid justify-center pt-12 text-center bg-green-100 rounded-xl group overflow-y-hidden cursor-pointer hover:bg-white transition delay-150 duration-300 ease-in-out ">
                    <h2 className="font-bold text-2xl">WordPress Themes</h2>
                    <p>Thousands of WordPress themes</p>
                    <div>
                      <a href="#" className="mx-2">newest</a>
                      <a href="#" className="mx-2">best seller</a>
                    </div>
                    <div className="mt-12 mx-10 bg-white p-1 rounded relative transform translate-y-10 group-hover:translate-y-9 group-hover:transform transition delay-150 duration-300 ease-in-out">
                      <img src="/static/category-tiles-wordpress.webp" />
                      <div className="absolute rounded-full flex items-center justify-center h-12 w-12 bg-red-100 " style={{ left: '44%', top: '-20px' }}>WP</div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="bg-pink-100 rounded-xl">
                <div >

                  <div className="grid justify-center pt-12 text-center bg-green-100 rounded-xl group overflow-y-hidden cursor-pointer hover:bg-white transition delay-150 duration-300 ease-in-out ">
                    <h2 className="font-bold text-2xl">WordPress Themes</h2>
                    <p>Thousands of WordPress themes</p>
                    <div>
                      <a href="#" className="mx-2">newest</a>
                      <a href="#" className="mx-2">best seller</a>
                    </div>
                    <div className="mt-12 mx-10 bg-white p-1 rounded relative transform translate-y-10 group-hover:translate-y-9 group-hover:transform transition delay-150 duration-300 ease-in-out">
                      <img src="/static/category-tiles-wordpress.webp" />
                      <div className="absolute rounded-full flex items-center justify-center h-12 w-12 bg-red-100 " style={{ left: '44%', top: '-20px' }}>WP</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full text-center mb-8">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md">View All Categories</button>
          </div>

        </div>
      </div>

      <Footer/>
    </div>
  )
}
