import React, { useState, useEffect } from 'react'
import axios from "axios";
import requests from '../Helpers/requests';
// import '../Styles/airing.scss'
import { Link, useParams } from 'react-router-dom'
import '../Styles/all.scss';
// import '../Styles/onAir.scss';
import Pagination from '../Components/Pagination';
import noImg from '../Img/noImg.png';
import PagePreloader from '../Components/PagePreloader';
import MovieCard1 from '../Components/MovieCard1';
import { excerpt } from '../Helpers/excerpt'

function OnAir() {
    const [onAir, setOnAir] = useState([]);
    const { onAirPage } = useParams()
    const [Loading, setLoading] = useState("")
    const [type, setType] = useState("movie")



    useEffect(() => {
        setLoading(true)

        window.scrollTo(0, 0);

        axios.get(`${requests.url}tv/on_the_air?api_key=${requests.apiKey}&language=en-US&page=${onAirPage}`).then(response => {
            setOnAir(response.data.results);
        })
        setTimeout(() => setLoading(false), 2000)
    }, [onAirPage])
    return (
        <>
            {
                Loading ? <PagePreloader fullWidth="fullWidth" setLoading={setLoading} />
                    :
                    <div className="container">
                        <div className="row">

                            <div className="col-12 text-capitalize text-white fs-2">
                                On Air <span className="badge fs-6" >{onAirPage}</span>
                            </div>
                            {

                                onAir.map((onAir, index) => (
                                    <>
                                        <MovieCard1
                                            description={excerpt(onAir.overview)}
                                            poster={onAir.poster_path ? `${requests.imgURL}${onAir.poster_path}` : noImg}
                                            date={onAir.first_air_date || onAir.release_date}
                                            name={onAir.name || onAir.original_name}
                                            movieId={onAir.id}
                                            link="on-air"
                                        />
                                    </>
                                ))
                            }
                            <Pagination pageName="on-air" PageNumber={onAirPage} />

                        </div>
                    </div>
            }
        </>
    )
}

export default OnAir
