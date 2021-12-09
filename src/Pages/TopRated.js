import React, { useState, useEffect } from 'react'
import axios from "axios";
import requests from '../Helpers/requests';
// import '../Styles/airing.scss'
import { Link, useParams } from 'react-router-dom'
import '../Styles/all.scss';
import '../Styles/topRated.scss';
import Pagination from '../Components/Pagination';
import noImg from '../Img/noImg.png';
import PagePreloader from '../Components/PagePreloader';
import MovieCard1 from '../Components/MovieCard1';
import {excerpt} from '../Helpers/excerpt'

function TopRated() {
    const [topRated, setTopRated] = useState([]);
    const { topRatedPage } = useParams()
    const [Loading, setLoading] = useState("")
    const [type, setType] = useState("movie")

    

    useEffect(() => {
        setLoading(true)

        window.scrollTo(0, 0);

        axios.get(`${requests.url}${type}/top_rated?api_key=${requests.apiKey}&language=en-US&page=${topRatedPage}`).then(response => {
            setTopRated(response.data.results);
        })
        setTimeout(() => setLoading(false), 2000)
    }, [topRatedPage,type])
    return (
        <>
        {
             Loading ? <PagePreloader fullWidth="fullWidth" setLoading={setLoading} />
             :
       <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-center toggle__type p-0  " >
                    <div className="separator"></div>
                    <Link to={`/top-rated/page/1`}   className="m-3" onClick={()=>setType("movie")}>MOVIES</Link>
                    <Link to={`/top-rated/page/1`} className="m-3" onClick={()=>setType("tv")}>TV SERIES</Link>
                </div>
                <div className="col-12 text-capitalize text-white fs-2">
                    {type=="tv" ? "Tv Series" : "Movies"} <span className="badge fs-6" >{topRatedPage}</span>
                </div>
            {

                topRated.map((airingToday, index) => (
                    <>
                        <MovieCard1
                            description={excerpt(airingToday.overview)}
                            poster={airingToday.poster_path ? `${requests.imgURL}${airingToday.poster_path}` : noImg}
                            date={airingToday.first_air_date || airingToday.release_date}
                            name={airingToday.name || airingToday.title}
                            movieId={airingToday.id}
                            link={type=="tv" ? "TvSeries" : "MovieDetails"}
                        />
                    </>
                ))
            }
            <Pagination pageName="top-rated" PageNumber={topRatedPage} />

        </div>
       </div>
        }
       </>
    )
}

export default TopRated
