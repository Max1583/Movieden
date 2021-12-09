import React from 'react'
import '../Styles/movieCard2.scss'
import { Link } from 'react-router-dom'

function MovieCard1({ description, poster, date, name, movieId, link }) {
    return (
        <div className="movieCard2 col-12 col-lg-6 p-3" >
            <div className="row">
                <div div className="col-12 col-lg-7 card__left" >
                    <img src={poster} alt="lucy" />
                </div >
                <div className="col-12 col-lg-5 card__right">
                    <article className="h-100 w-100 d-block d-lg-flex">
                        <div>
                            <Link to={`/${link}/${movieId}`} > <h3 className="mt-3 mt-lg-0">{name} </h3></Link>
                            <p className="description">{description}</p>
                            <p className="date">{date}</p>
                        </div>
                    </article>
                </div>
            </div >
        </div >
    )
}

export default MovieCard1
