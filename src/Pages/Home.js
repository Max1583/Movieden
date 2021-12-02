import React,{useState,useEffect} from 'react'
import Hero from '../Components/Hero'
import PopularMovies from '../Components/PopularMovies'
import SearchMovies from '../Components/SearchMovies'
import '../Styles/Home.scss'
import PagePreloader from '../Components/PagePreloader'
import axios from 'axios'
import requests from '../Helpers/requests'

function Home() {
    const [trending,setTrending] = useState([])

const [Loading,setLoading] = useState(true)
useEffect(()=>{
    axios.get(`${requests.url}/trending/movie/day?api_key=${requests.apiKey}&language=en-US&page=1`).then(response => {
        setTrending(response.data.results)
    })
setTimeout(()=>setLoading(false), 2000)
})
    return (
        <>{
            Loading ? <PagePreloader fullWidth="fullWidth" /> :
       
        <section className="homepage container-fluid  p-0">
            <Hero trending={trending}/>
                     
<PopularMovies type="movie" />
<PopularMovies type="tv" />

        </section>
     }</>
    )
}

export default Home
