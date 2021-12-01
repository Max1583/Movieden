import React,{useState,useEffect} from 'react'
import axios from "axios";
import requests from '../Helpers/requests';
import '../Styles/PopularMovies.scss'
import '../Styles/popularPage.scss';
import '../Styles/all.scss';

function Reviews({type,linkId}) {
const [reviews,setReviews]= useState()
    useEffect(()=>{
        axios.get(`${requests.url}${type}/${linkId}/reviews?api_key=${requests.apiKey}&language=en-US&page=1`).then((response)=>{
            setReviews(response.data.results[Math.floor(Math.random() * response.data.results.length)]);
        })
    },[linkId])

    // const review = reviews[Math.floor(Math.random() * reviews.length)]

    return (
        <div className="row" >
            {
            }
              <div className="col-12">
                        {/* <h3>{console.log(reviews)}</h3> */}
                    <p>{reviews.content}</p>
                    </div>
            {/* {
                reviews.Math.floor(Math.random() * reviews.length).map((review)=>(
                    <div className="col">
                        <h3>{review.author}</h3>
                    <p>{review.content}</p>
                    </div>
                ))
            } */}
        </div>
    )
}

export default Reviews
