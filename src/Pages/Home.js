import React from 'react'
import Hero from '../Components/Hero'
import PopularMovies from '../Components/PopularMovies'
import SearchMovies from '../Components/SearchMovies'
import '../Styles/Home.scss'

function Home() {
    return (
        <section className="homepage container-fluid  p-0">
            <Hero/>
                       {/* <div className=" pt-5 mb-5">
               <div>
               <h1 className="text-center text-white" >Get Unlimited movies, TV shows, <br/> and more😎</h1>
               </div>
               <SearchMovies />
           </div> */}
<PopularMovies type="movie" />
<PopularMovies type="tv" />

        </section>
    )
}

export default Home
