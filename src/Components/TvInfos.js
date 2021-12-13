import React from 'react';
import requests from '../Helpers/requests'
import { FiDisc } from 'react-icons/fi';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import noImg from '../Img/noImg.png';
import DownloadLinks from './DownloadLinks';


function TvInfos({ tvDetails, ytKey, seasons, genre }) {


    return (
        <div className="container py-3">
            {/* movie__details__trailer */}
            <div className="col-12 justify-content-center align-items-center ">

                <iframe title={tvDetails.title} height="400" className="w-100 season-trailer" src={`https://www.youtube.com/embed/${ytKey}`}></iframe>
            </div>

            <h2 className=" grunge__text mt-3">{tvDetails.name}</h2>



            <div className=" mt-3 text-white">
                <aside className="d-inline" > <FiDisc /></aside>  <span className="genres" > {genre}</span>
            </div>

            <div className="col-12 mt-3">
                <div className=" mt-3 text-white">
                    <span className="pr-4"><FaRegCalendarAlt />  {tvDetails.first_air_date}</span>
                    {/* <span className="" >  <FaHourglassEnd />  {movieDetails.runtime } mins</span>  */}
                </div>

                <p className=" movie__overview mt-3" > {tvDetails.overview}</p>
            </div>
            <h4 className="overview_header text-white px-3 py-1 mt-5" >Seasons <span className="badge" >{tvDetails.number_of_seasons}</span> </h4>

            <div className="row justify-content-start">

                {
                    seasons.map(season => (
                        <div key={`${requests.imgURL}${season.id}`} className="season col-6 col-sm-4 col-md-3 col-xl-2 g-4 " >

                            <div className="season_poster text-center rounded">
                                <img src={season.poster_path == null ? noImg : `${requests.imgURL}${season.poster_path}`} alt={season.id} />
                                <Link to="/">
                                    <h5 className="py-1" >Season {season.season_number}</h5>

                                </Link>
                            </div>

                        </div>
                    ))
                }
            </div>

            <DownloadLinks title={tvDetails.name} />

        </div>
    )
}

export default TvInfos
