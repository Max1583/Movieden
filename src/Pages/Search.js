import React,{useState,useEffect} from 'react'
import axios from "axios";
import {Link,useParams} from 'react-router-dom';
import SearchResults from '../Components/SearchResults';
import requests from '../Helpers/requests';

function Search() {
    const [movieSearchResults,setMovieSearchResults] = useState([])
    const {searchValue} =useParams()

    useEffect(()=>{
        axios.get(`${requests.fetchSearchResults}${searchValue}`).then((response) => {
            // console.table(response.data.results);
            setMovieSearchResults(response.data.results)
            console.error(response.data.results);
    
          }).catch(function (error) {
            console.error(error);
        });
    },[searchValue])
    return (
        <div className="container "> 
<SearchResults movieSearchResults ={movieSearchResults}  />

            
        </div>
    )
}

export default Search
