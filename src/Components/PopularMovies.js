import React, { useState, useEffect } from 'react'
import axios from "axios";
import requests from '../Helpers/requests';
import '../Styles/PopularMovies.scss'
import { Link } from 'react-router-dom'
import BtnFill from './BtnFill';


function PopularMovies({ type }) {

    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        axios.get(`${requests.url}${type}${requests.fetchPopular}`).then((response) => {
            setPopularMovies(response.data.results)
            console.log(popularMovies)

        })
    }, [])

    return (
        <section className="container">
            <h4 className=" text-white text-capitalize">Popular {type == "tv" ? "Tv Series" : "Movies"}</h4><br />
            <div className="popular__movies__container mx-auto mb-4" >
                {
                    popularMovies.map(
                        (popularMovie, index) => (
                            <section className="popular__movies d-flex m-2 mb-3" key={index} style={{ backgroundImage: `linear-gradient(to top,rgba(0,0,0,.74) 30%,rgba(0,0,0,0) 50%), url(${requests.imgURL}${popularMovie.backdrop_path})` }} >

                                <div >
                                    <Link to={`/${type == "tv" ? "TvSeries" : "MovieDetails"}/${popularMovie.id}`} className="original_title_link" >
                                        <h5 id={popularMovie.id} className="original_title mb-1">
                                            {type == "tv" ? popularMovie.original_name : popularMovie.original_title}
                                        </h5>
                                    </Link>
                                    <p className="release_date " >{type == "tv" ? popularMovie.first_air_date : popularMovie.release_date}</p>
                                </div>

                            </section>
                        )

                    )}
            </div>
            <BtnFill path={`/popular/${type}/page/1`} value="VIEW MORE" />
        </section>
    )

}

export default PopularMovies;