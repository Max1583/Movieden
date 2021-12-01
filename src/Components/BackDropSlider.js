import React,{useEffect,useState} from 'react'
import '../Styles/Sliders.scss'
import requests from '../Helpers/requests';

function BackDropSlider({movieBackdrops}) {
    return (
      <div className="slider">
      
      <h3  className="mt-5 text-white title__border">MOVIE BACKDROPS</h3>
      <div className="backdrop_slider container d-flex" >
        
          {
               movieBackdrops.slice(1, 7).map(
                (movieBackdrop,index) =>(
                        <div className="backdrop__images col g-4 m-1" key={index}>
                    <img loading="lazy" src={`${requests.imgURL}${movieBackdrop.file_path}`}  height="220" alt="dd" />
                    </div>
                ) 
              
              )
          }

    
    
      </div>
      </div>
    )
}

export default BackDropSlider
