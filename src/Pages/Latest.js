import React, { useState, useEffect } from 'react'
import axios from "axios";
import requests from '../Helpers/requests';
// import '../Styles/airing.scss'
import { Link, useParams } from 'react-router-dom'
import '../Styles/all.scss';
// import '../Styles/Latest.scss';
import Pagination from '../Components/Pagination';
import noImg from '../Img/noImg.png';
import PagePreloader from '../Components/PagePreloader';
import MovieCard1 from '../Components/MovieCard1';
import { excerpt } from '../Helpers/excerpt'

function Latest() {
    const [Latest, setLatest] = useState([]);
    const { latestPage } = useParams()
    const [Loading, setLoading] = useState("")

    useEffect(() => {
        setLoading(true)

        window.scrollTo(0, 0);

        axios.get(`${requests.url}movie/now_playing?api_key=${requests.apiKey}&language=en-US&page=${latestPage}`).then(response => {
            setLatest(response.data.results);
        })
        setTimeout(() => setLoading(false), 2000)
    }, [latestPage])
    return (
        <>
            {
                Loading ? <PagePreloader fullWidth="fullWidth" setLoading={setLoading} />
                    :
                    <div className="container">
                        <div className="row">

                            <div className="col-12 text-capitalize text-white fs-2 my-2">
                                Latest <span className="badge fs-6" >{latestPage}</span>
                            </div>
                            {

                                Latest.map((latest, index) => (
                                    <>
                                        <MovieCard1
                                            description={excerpt(latest.overview)}
                                            poster={latest.poster_path ? `${requests.imgURL}${latest.poster_path}` : noImg}
                                            date={latest.first_air_date || latest.release_date}
                                            name={latest.name || latest.title}
                                            movieId={latest.id}
                                            link="MovieDetails"
                                        />
                                    </>
                                ))
                            }
                            <Pagination pageName="latest" PageNumber={latestPage} />

                        </div>
                    </div>
            }
        </>
    )
}

export default Latest
