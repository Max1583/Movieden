import React,{useState,useEffect} from 'react'
import axios from "axios";
import requests from '../Helpers/requests';
import '../Styles/similarMovies.scss'
import {Link} from 'react-router-dom'

function SimilarMovies({linkId,type}) {
    const [similarMovies,setSimilarMovies]=useState([])

    useEffect(()=>{
        axios.get(`${requests.url}${type}/${linkId}/similar?api_key=b92eb019ef38b75833dcf3ae7a395494`).then((response)=>{
            setSimilarMovies(response.data.results)
            // console.log(similarMovies + "similar movies ooooo")
    
        })
    },[linkId])
    
        return (
            <div className="container ">
             <h4 className=" text-white title__border" >SIMILAR MOVIES</h4>
            <div className=" similar__movies__container container mx-auto mb-5" >
              
                {
                    similarMovies.map(
                        (similarMovie,index)=>(
                            <section  className="similar__movies d-flex m-2 mb-3" key={index}  style={{backgroundImage:`linear-gradient(to top,rgba(0,0,0,.94) 30%,rgba(0,0,0,0) 60%), url(${requests.imgURL}${similarMovie.poster_path})`}} >
                                
                               <div >
                                   {/* {type=="tv"? original_name : original_title} */}
                                   {/* {type=="tv"? TvDetails : MovieDetails} */}
                                   {/* <Link to={type=="tv"? `/MovieDetails/${similarMovie.id }` :`/TvDetails/${similarMovie.id }` } className="original_title_link" > */}
                                   <Link to={ `/${type=="tv"?"TvSeries" : "MovieDetails"}/${similarMovie.id }` } className="original_title_link" >
                               <h5 id={similarMovie.id} className="original_title">{type=="tv" ? similarMovie.original_name : similarMovie.original_title}</h5>
                               </Link>
                                <p className="release_date" >{type == "tv" ?similarMovie.first_air_date : similarMovie.release_date}</p>
                                {/* <div className="vote_average" >{similarMovie.vote_average}</div> */}
                               </div>
    
                            </section>
                        )
    
                        )}
                        
            </div></div>
        )
        
    }

export default SimilarMovies
