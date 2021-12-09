import React, { useState, useEffect } from 'react'
import axios from "axios";
import requests from '../Helpers/requests';
// import '../Styles/airing.scss'
import { Link, useParams } from 'react-router-dom'
import '../Styles/all.scss';
// import '../Styles/trending.scss';
import Pagination from '../Components/Pagination';
import noImg from '../Img/noImg.png';
import PagePreloader from '../Components/PagePreloader';
import MovieCard1 from '../Components/MovieCard1';
import { excerpt } from '../Helpers/excerpt'

function Trending() {
    const [trending, setTrending] = useState([]);
    const { trendingPage } = useParams()
    const [Loading, setLoading] = useState("")
    const [type, setType] = useState("movie")



    useEffect(() => {
        setLoading(true)

        window.scrollTo(0, 0);

        axios.get(`${requests.url}/trending/${type}/week?api_key=${requests.apiKey}&language=en-US&page=${trendingPage}`).then(response => {
            setTrending(response.data.results);
        })
        setTimeout(() => setLoading(false), 2000)
    }, [trendingPage, type])
    return (
        <>
            {
                Loading ? <PagePreloader fullWidth="fullWidth" setLoading={setLoading} />
                    :
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center toggle__type p-0  " >
                                <div className="separator"></div>
                                <Link to={`/trending/page/1`} className="m-3" onClick={() => setType("movie")}>MOVIES</Link>
                                <Link to={`/trending/page/1`} className="m-3" onClick={() => setType("tv")}>TV SERIES</Link>
                            </div>
                            <div className="col-12 text-capitalize text-white fs-2">
                                {type == "tv" ? "Tv Series" : "Movies"} <span className="badge fs-6" >{trendingPage}</span>
                            </div>
                            {

                                trending.map((trending, index) => (
                                    <>
                                        <MovieCard1
                                            description={excerpt(trending.overview)}
                                            poster={trending.poster_path ? `${requests.imgURL}${trending.poster_path}` : noImg}
                                            date={trending.first_air_date || trending.release_date}
                                            name={trending.title || trending.original_title}
                                            movieId={trending.id}
                                            link={type == "tv" ? "TvSeries" : "MovieDetails"}
                                        />
                                    </>
                                ))
                            }
                            <Pagination pageName="trending" PageNumber={trendingPage} />

                        </div>
                    </div>
            }
        </>
    )
}

export default Trending
