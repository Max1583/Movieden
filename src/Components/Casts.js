import React,{useState,useEffect} from 'react'
import axios from "axios";
import requests from '../Helpers/requests';
import '../Styles/casts.scss'
import '../Styles/all.scss'
import {Link} from 'react-router-dom'
import noImg from '../Img/noImg.png';

function Casts({linkId}) {
    const [casts,setCasts]= useState([])

    useEffect(()=>{
        axios.get(`${requests.fetchCasts}/${linkId}/credits?api_key=${requests.apiKey}&language=en-US`).then((response)=>{
            setCasts(response.data.cast);
        })
    },[linkId])
    return (
        <>
        {
            Casts.length?
        <>
             <h4 className="mt-5  text-white title__border" > CASTS</h4>
            <div className=" casts__container container mx-auto mb-4 dark__scrollbar " >
              
           {
               casts.slice(1, 10).map((cast,index)=>(
                   <div className="casts  text-center " key={index} >
              
                   <img src={cast.profile_path==null ? noImg : `${requests.imgURL}${cast.profile_path}`}  className="casts_img rounded-circle mb-2" alt={cast.name} />
                  <div className=" pl-3">
                  <h5 className="cast__name" >{cast.name}</h5>
                   
                   <p className=" cast__character" >{cast.character}</p>
                  </div>

                   </div>
               ))
           }
                        
            </div>
            </>
            :"" }
            </>
    )
}

export default Casts
