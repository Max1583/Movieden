import React, { useEffect, useState } from 'react'
import axios from "axios";
import requests from '../Helpers/requests';
import '../Styles/similarMovies.scss'


function GetData({ linkId, datatype }) {
    const apiKey = "b92eb019ef38b75833dcf3ae7a395494";
    const baseUrl = "https://api.themoviedb.org/3/"
    const [movieData, setMovieData] = useState([])
    useEffect(() => {
        axios.get(`${baseUrl}${type}${linkId}/similar?api_key=${apiKey}`).then((response) => {
            setMovieData(response.data.results)
            // console.log(similarMovies + "similar movies ooooo")

        })
    }, [linkId])

    return (
        <>
            {movieData}
        </>
    )
}

export default GetData
