import React,{useState,useEffect} from 'react'
import {Link,useParams} from 'react-router-dom';
import requests from '../Helpers/requests'
import axios from 'axios';
import TvInfos from './TvInfos';
import BackDropSlider from './BackDropSlider';
import '../Styles/tvDetails.scss'
import '../Styles/all.scss'
import SimilarMovies from './SimilarMovies';
import PagePreloader from './PagePreloader';
import Recommendations from './Recommendations';


function TvDetails() {
const {tvId} =useParams();
const [tvDetails,setTvDetails] = useState('');
const [ytKey,setYtKey] = useState([]);
const [movieBackdrops,setMovieBackdrops] = useState([])
const [seasons,setSeasons] = useState([]);
const [genre,setGenre] = useState('Adventure')
const [Loading,setLoading] = useState(true)

useEffect(()=>{
    setLoading(true)
axios.get(`${requests.url}/tv/${tvId}?api_key=${requests.apiKey}&append_to_response=videos,images`).then(response=>{
  
    response.data.videos ?
    response.data.videos.results.length > 0 ? setYtKey(response.data.videos.results[Math.floor(Math.random() * response.data.videos.results.length)].key):setYtKey("yes key")
    :setYtKey("yes key")
 
    setTvDetails(response.data)

    setSeasons(response.data.seasons)
setMovieBackdrops(response.data.images.backdrops)
setGenre( 
    response.data.genres.map(
      genre =><span key={genre.name}>{genre.name } |</span>
      ))
setTimeout(()=>setLoading(false), 2000)

})
},[tvId])
    return (
        <>
 { Loading ? <PagePreloader fullWidth="fullWidth"  />
:
        <div className="container tvDetails">
            <TvInfos tvDetails={tvDetails} ytKey={ytKey} seasons={seasons} genre={genre} />
                   {/* <h1>{tvDetails.overview}</h1> */}
            <BackDropSlider movieBackdrops={movieBackdrops} />  

            <SimilarMovies linkId={tvId} type="tv" />

<Recommendations  linkId={tvId} type="tv" />

        </div>
}
        </>
    )
}

export default TvDetails
