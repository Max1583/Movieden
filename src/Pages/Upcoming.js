import React, { useState, useEffect } from 'react'
import axios from "axios";
import requests from '../Helpers/requests';
// import '../Styles/airing.scss'
import { Link, useParams } from 'react-router-dom'
import '../Styles/all.scss';
// import '../Styles/Upcoming.scss';
import Pagination from '../Components/Pagination';
import noImg from '../Img/noImg.png';
import PagePreloader from '../Components/PagePreloader';
import MovieCard1 from '../Components/MovieCard1';
import { excerpt } from '../Helpers/excerpt'

function Upcoming() {
    const [Upcoming, setUpcoming] = useState([]);
    const { upcomingPage } = useParams()
    const [Loading, setLoading] = useState("")

    useEffect(() => {
        setLoading(true)

        window.scrollTo(0, 0);

        axios.get(`${requests.url}movie/upcoming?api_key=${requests.apiKey}&language=en-US&page=${upcomingPage}`).then(response => {
            setUpcoming(response.data.results);
        })
        setTimeout(() => setLoading(false), 2000)
    }, [upcomingPage])
    return (
        <>
            {
                Loading ? <PagePreloader fullWidth="fullWidth" setLoading={setLoading} />
                    :
                    <div className="container">
                        <div className="row">

                            <div className="col-12 text-capitalize text-white fs-2 my-2">
                                Upcoming <span className="badge fs-6" >{upcomingPage}</span>
                            </div>
                            {

                                Upcoming.map((upcoming, index) => (
                                    <>
                                        <MovieCard1
                                            description={excerpt(upcoming.overview)}
                                            poster={upcoming.poster_path ? `${requests.imgURL}${upcoming.poster_path}` : noImg}
                                            date={upcoming.first_air_date || upcoming.release_date}
                                            name={upcoming.name || upcoming.title}
                                            movieId={upcoming.id}
                                            link="MovieDetails"
                                        />
                                    </>
                                ))
                            }
                            <Pagination pageName="upcoming" PageNumber={upcomingPage} />

                        </div>
                    </div>
            }
        </>
    )
}

export default Upcoming
