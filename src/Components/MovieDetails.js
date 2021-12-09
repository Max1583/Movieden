import React,{useState,useEffect} from 'react'
import axios from "axios";
import '../Styles/searchMovies.scss'
import requests from '../Helpers/requests';
import '../Styles/MovieDetails.scss'
import {Link,useParams} from 'react-router-dom'
import BackDropSlider from './BackDropSlider';
import MovieInfos from './MovieInfos';
import SimilarMovies from './SimilarMovies';
import Recommendations from './Recommendations';
import Casts from './Casts';
import PagePreloader from './PagePreloader';
import Reviews from './Reviews';

function MovieDetails() {

const {linkId} = useParams()
const [movieDetails,setMovieDetails] = useState([]);
const [ytKey,setYtKey] = useState('')
const [genre,setGenre] = useState('Adventure')
const [movieBackdrops,setMovieBackdrops] = useState([])
const [Loading,setLoading] = useState(true)

// function checkLoading() { 
//   Loading ? alert("Loading too long") : console.log("ok");
//  }
// setTimeout(checkLoading, 10000)


useEffect(()=>{
  setLoading(true)
 window.scrollTo(0, 0);
// REQUEST MOVIE INFO WITH MOVIE ID🙌

axios.get(
  `${requests.fetchMovieDescription}${linkId}?api_key=${requests.apiKey}&append_to_response=videos,images`
).then((response) => {

setMovieDetails(response.data)

setYtKey(response.data.videos.results[Math.floor(Math.random() * response.data.videos.results.length)].key)

setGenre( 
  response.data.genres.map(
    genre =><span key={genre.name}>{genre.name } |</span>
    ))

setMovieBackdrops(response.data.images.backdrops)

setTimeout(()=>setLoading(false), 2000)

// closePreLoader()
// setLoading(false)

}).catch(function (error) {
console.error(error);
});

},[linkId])


return (
<>

{

  Loading ? <PagePreloader fullWidth="fullWidth"  />
:
<>


<MovieInfos movieDetails={movieDetails} genre={genre} ytKey={ytKey} linkId={linkId} movieBackdrops={movieBackdrops} />
<div className="container" >

  

{
   <BackDropSlider movieBackdrops={movieBackdrops}/>
}
{/* <Reviews type="movie" linkId={linkId} /> */}
<Casts linkId={linkId} />

</div>


<SimilarMovies linkId={linkId} type="movie" />
<Recommendations  linkId={linkId} type="movie" />


</>
}
</>


    )
}

export default MovieDetails