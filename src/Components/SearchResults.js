import React from 'react'
import '../Styles/movieSearchResults.scss'
import requests from '../Helpers/requests';
import {Link} from 'react-router-dom'
import noImg from '../Img/noImg.png';
import '../Styles/all.scss';



function SearchResults({movieSearchResults}) {
 
    
    return (
      <>
      {/* <h2 className="container mt-4" >SEARCH RESULTS</h2> */}
        <section className="container-fluid  movie__search__results my-5 ">
            <div className="container ">

              <div className="row">
               
              {movieSearchResults.filter(item=>item.media_type!=="person").map((movieSearchResultItem,index)=>(
             <div className="search__result__item col-6 col-sm-4 col-md-3 col-xl-2 g-4 "  key={index}>
                 
             <img loading="lazy" src={ 
               movieSearchResultItem.poster_path==null ? noImg : `${requests.imgURL}${movieSearchResultItem.poster_path}` 
              } alt={movieSearchResultItem.title}  className="movie__poster mb-2"/>

             <Link to={(movieSearchResultItem.media_type=="movie") ? `/MovieDetails/${movieSearchResultItem.id}` : `/TvSeries/${movieSearchResultItem.id}`} className="movie_link " >
               <h5 id={movieSearchResultItem.id} > {movieSearchResultItem.title || movieSearchResultItem.name }</h5>
               </Link>
               <div className="media_type text-white">{movieSearchResultItem.media_type=="tv"?"Tv" : "M"}</div>
             
         </div>
         ))}
              </div>
            </div>

{/* {displayMovieDetails ? <MovieDetails  /> : ""} */}

        </section>
        </>
    )
}

export default SearchResults
