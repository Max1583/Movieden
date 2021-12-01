import React,{useState} from 'react'
import axios from "axios";
import '../Styles/searchMovies.scss'
import requests from '../Helpers/requests';
import SearchResults from './SearchResults';
import { FiSearch } from 'react-icons/fi';



function SearchMovies() {
const [searchValue,setSearchValue] = useState("")
const [movieSearchResults,setMovieSearchResults] = useState([])

// GET VALUE FROM SEARCH BOX
const collectSearchValue=(evt)=>{
setSearchValue(evt.target.value)
}

// MAKE REQUEST TO TMDB AND GET MOVIE SEARCH RESULTS
 const handleSearch =(e)=>{
     
    e.preventDefault();
    axios.get(requests.fetchSearchResults + searchValue).then((response) => {
        // console.table(response.data.results);
        setMovieSearchResults(response.data.results)
        // console.error(response.data.results);

      }).catch(function (error) {
        console.error(error);
    });
 }
  
    return (
        <div className="container-fluid  p-0">
              <form className="search-form mx-auto row pt-3 px-5">
                    <input type="text" className="col-12 col-md-8 py-4 my-2" placeholder="eg - John Wick, Den of Thieves"   onInput={collectSearchValue}/>
                    <button className="col-12  py-4 my-2 col-md-4 search-button" onClick={handleSearch}>SEARCH  <FiSearch /></button>
                </form>

{/* SEARCH RESULTS COMPONENT WITH MAIN 🔵SEARCH RESULTS🔵 PASSED DOWN AS PROP😎 */}
<SearchResults movieSearchResults ={movieSearchResults}  />

        </div>
    )
}

export default SearchMovies
