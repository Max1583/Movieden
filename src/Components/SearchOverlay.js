import React,{useState} from 'react'
import '../Styles/searchOverlay.scss'
import { FiSearch } from 'react-icons/fi';
import {Link} from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';


function SearchOverlay({isSearchOverlay,setIsSearchOverlay}) {

const [searchValue,setSearchValue]= useState("")

const handleSearch =(e)=>{
    // e.preventDefault();
setSearchValue(e.target.value);
}
    return (
        <>
        {
isSearchOverlay ?
        
        <div className="search__overlay container-fluid">

            <form className="" >
                <input type="text" placeholder="Eg - John Wick" onInput={handleSearch} />
                <br/>
                <Link to={`/search/${searchValue}`} className="search-button" onClick={()=>setIsSearchOverlay(false)} >SEARCH  <FiSearch /></Link>

                < RiCloseLine className="searchOverlay__close" onClick={()=>setIsSearchOverlay(false)} />
            </form>
        </div>

        :""
        }
        </>
    )
}

export default SearchOverlay
