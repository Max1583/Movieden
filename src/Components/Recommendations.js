import React,{useState,useEffect} from 'react'
import axios from "axios";
import requests from '../Helpers/requests';
import '../Styles/recommendedMovies.scss'
import '../Styles/all.scss'
import {Link} from 'react-router-dom'
import BtnFill from './BtnFill';

function Recommendations({linkId,type}) {

    const [recommendedMovies,setRecommendedMovies]=useState([])
    useEffect(()=>{
        axios.get(`${requests.url}${type}/${linkId}/recommendations?api_key=${requests.apiKey}`).then((response)=>{
            // console.log(response.data.results)
            setRecommendedMovies( response.data.results)
        })
    },[linkId])

    return (
   <>     
{
recommendedMovies.length>0?
<div className="container ">

<h4 className="text-white title__border" >YOU MIGHT ALSO LIKE ❤</h4>
<div className=" recommended__movies__container container dark__scrollbar mx-auto mb-5" >
              {
                  recommendedMovies.map(
                      (recommendedMovie,index)=>(
                          <section   className="recommended__movies d-flex m-2 mb-3 px-3 .box-shadow1" key={index}  style={{backgroundImage:`linear-gradient(to top,rgba(0,0,0,.94) 30%,rgba(0,0,0,0) 60%), url(${requests.imgURL}${recommendedMovie.backdrop_path})`}} >
                              
                             <div >

                                 <Link to={ `/${type=="tv"?"TvSeries" : "MovieDetails"}/${recommendedMovie.id }` } className="original_title_link" >
                             <h5 id={recommendedMovie.id} className="original_title mb-1">
                                 {type=="tv" ? recommendedMovie.original_name : recommendedMovie.original_title}
                             </h5>
                             </Link>
                             <p className="release_date " >{type == "tv" ?recommendedMovie.first_air_date : recommendedMovie.release_date}</p>

                              {/* <p className="release_date" >{recommendedMovie.release_date}</p> */}
                             </div>
  
                          </section>
                      )
  
                      )}
                      
          </div>

      </div>    : ""}
        </>
    )
}

export default Recommendations
