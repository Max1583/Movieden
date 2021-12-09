import React, { useState, useEffect } from 'react'
import axios from "axios";
import requests from '../Helpers/requests';
// import '../Styles/airing.scss'
import { Link, useParams } from 'react-router-dom'
import '../Styles/all.scss';
import Pagination from '../Components/Pagination';
import noImg from '../Img/noImg.png';
import PagePreloader from '../Components/PagePreloader';
import MovieCard1 from '../Components/MovieCard1';
import { excerpt } from '../Helpers/excerpt'

function AiringToday() {
    const [airing, setAiring] = useState([]);
    const { airingPage } = useParams()
    const [Loading, setLoading] = useState(" ")
    const [pageLength, setPageLength] = useState(" ")

    useEffect(() => {
        setLoading(true)

        window.scrollTo(0, 0);

        axios.get(`${requests.url}tv/airing_today?api_key=${requests.apiKey}&language=en-US&page=${airingPage}`).then(response => {
            setAiring(response.data.results);
        })
        setTimeout(() => setLoading(false), 2000)

    }, [airingPage])
    return (
        <div className=" ">

            {
                Loading ? <PagePreloader fullWidth="fullWidth" setLoading={setLoading} />
                    :
                    <div className="container py-3 ">
                        <section className="row mb-5" >
                            {
                                airing.map((airingToday, index) => (
                                    <>
                                        <MovieCard1
                                            description={excerpt(airingToday.overview)}
                                            poster={airingToday.poster_path ? `${requests.imgURL}${airingToday.poster_path}` : noImg}
                                            date={airingToday.first_air_date}
                                            name={airingToday.name || airingToday.original_name}
                                            movieId={airingToday.id}
                                            link="TvSeries"
                                        />
                                    </>
                                ))
                            }



                        </section>
                        <Pagination pageName="airing-today" PageNumber={airingPage} />
                    </div>
            }


        </div>
    )
}

export default AiringToday
