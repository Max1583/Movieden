import React, { useState, useEffect } from 'react'
import Hero from '../Components/Hero'
import PopularMovies from '../Components/PopularMovies'
import SearchMovies from '../Components/SearchMovies'
import '../Styles/Home.scss'
import PagePreloader from '../Components/PagePreloader'
import axios from 'axios'
import requests from '../Helpers/requests'
import GridItem from '../Components/GridItem'

function Home() {
    const [trending, setTrending] = useState([])

    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(`${requests.url}movie/now_playing?api_key=${requests.apiKey}&language=en-US&page=1`).then(response => {
            setTrending(response.data.results)
        })
        setTimeout(() => setLoading(false), 2000)
    })
    return (
        <>{
            Loading ? <PagePreloader fullWidth="fullWidth" /> :

                <section className="homepage container  p-0">
                    <Hero trending={trending} />

                    <PopularMovies type="movie" />
                    <PopularMovies type="tv" />

                    <div className="container">
                        <div className=" row g-3 py-4">

                            <GridItem
                                colSize="col-md-6 col-lg-3 "
                                background={`linear-gradient(40deg, rgba(255, 216, 111, 0.8), rgba(252, 98, 98, 0.7)), url("https://image.tmdb.org/t/p/w500/r7K6Xt0RX4Mw0cAbZVw5cyb1Tux.jpg")`}
                                value="TRENDING"
                                path="/trending"
                            />

                            <GridItem
                                colSize="col-md-6 col-lg-3   "
                                background={`linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)), url("https://image.tmdb.org/t/p/w500/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg")`}
                                value="UPCOMING"
                                path="/upcoming"
                            />
                            <GridItem
                                colSize="col-md-6 col-lg-6   "
                                background={`linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)), url("https://image.tmdb.org/t/p/w500/riaO9lEYnzlmkILiLG3Y6HtJaM3.jpg")`}
                                value="NOW PLAYING"
                                path="/now-playing"
                            />
                            <GridItem
                                colSize="col-md-6 col-lg-6  "
                                background={`linear-gradient(40deg, rgba(255, 110, 196, 0.8), rgba(120, 115, 245, 0.8)), url("https://image.tmdb.org/t/p/w500/mxdiaM2tsx8M6W3zLgiPwAkhQfq.jpg")`}
                                value="LATEST"
                                path="/latest"
                            />
                            <GridItem
                                colSize="col-md-6 col-lg-3  "
                                background={`linear-gradient(to right, rgba(147, 42, 30, 0.9), rgba(237, 33, 57, 0.9)), url("https://image.tmdb.org/t/p/w500/fJWe8TyNJHCybsbdinj0b562FDT.jpg")`}
                                value="5 "
                                path="/"
                            />
                            <GridItem
                                colSize=" col-md-6 col-lg-3   "
                                background={`linear-gradient(to right, rgba(229, 93, 136, 0.9), rgba(95, 195, 228, 0.9)), url("https://image.tmdb.org/t/p/w500/s5g9IRR8QWgwuIrxPp9wI59M7V9.jpg")`}
                                value="6 "
                                path="/"
                            />

                        </div>
                    </div>
                </section>
        }</>
    )
}

export default Home
