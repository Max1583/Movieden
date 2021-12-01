import React,{useState,useEffect} from 'react'
import axios from "axios";
import requests from '../Helpers/requests';
import '../Styles/PopularMovies.scss'
import {Link,useParams} from 'react-router-dom'
import '../Styles/popularPage.scss';
import '../Styles/all.scss';
import Pagination from '../Components/Pagination';
import BtnFill from '../Components/BtnFill';
import noImg from '../Img/noImg.png';
import PagePreloader from '../Components/PagePreloader';



function Popular() {
    const [Loading,setLoading] = useState(" ")

    const [popularMovies,setPopularMovies] =useState([])
const {type,popularPageId} = useParams()
    useEffect(()=>{
        setLoading(true)

 window.scrollTo(0, 0);
        
        axios.get(`${requests.url}${type}/popular?api_key=${requests.apiKey}&language=en-US&page=${popularPageId}`).then((response)=>{
            setPopularMovies(response.data.results)
            // console.log(popularMovies)
setTimeout(()=>setLoading(false), 2000)

        }).catch(function (error) {
            console.error(error);
            });
    },[popularPageId])


    return (

        <>
        {
Loading ?  <PagePreloader fullWidth="fullWidth" setLoading={setLoading} />
:
        
        <section className="container" >
            <h3 className="text-white mt-3" >POPULAR {type.toUpperCase() } PAGE <span className="badge" >{popularPageId}</span></h3>
<div className="popular_movies_page row mb-5 justify-content-sm-start justify-content-center ">
            {
               
                popularMovies.map((popularMovie)=>(
                    <div className="popular_movie  col-10  col-sm-6 col-lg-4   g-5 " >
                        <div className="inner__light pb-2">
                        <div className="movie_poster_container w-100">
                        <img  className="movie_poster w-100" 
               src={popularMovie.backdrop_path==null ? noImg :  `${requests.imgURL}${popularMovie.poster_path}` } 
                       
                        height="350" loading="lazy"  alt="" />
                        </div>

<Link to={ `/${type=="tv"?"TvSeries" : "MovieDetails"}/${popularMovie.id }` } className="movie_link" >
                             <h5 id={popularMovie.id} className="original_title mb-1">
                                 {type=="tv" ? popularMovie.original_name : popularMovie.original_title}
                             </h5>
                             </Link>
<div className="vote_average">{popularMovie.vote_average}</div>
                        </div>
                    </div>
                ))
            }
        </div>
         <Pagination
        popularPageId={popularPageId}
        type={type}
            />
        </section>
        }
        </>
    )
}

export default Popular
