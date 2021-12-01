import React,{useState,useEffect} from 'react'
import axios from "axios";
import requests from '../Helpers/requests';
import '../Styles/notFound.scss'
import {Link} from 'react-router-dom'
import NotFoundInner from '../Components/NotFoundInner';
// import BtnFill from './BtnFill'; 


function NotFound() {

    // const [popularMovies,setPopularMovies]=useState([])

    // useEffect(()=>{
    //     axios.get(`${requests.fetchPopular}`).then((response)=>{
    //         setPopularMovies(()=>response.data.results)
    //         // console.log(popularMovies)
            
    //     })
    // },[])
    return (
        <div className=" vh-100  not__found" >
<div className=" vh-25  border" >
    c
</div>
        </div>
    )
}

export default NotFound
