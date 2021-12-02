import React,{useState} from 'react'
import '../Styles/Sliders.scss'
import requests from '../Helpers/requests';
import { FiCamera } from 'react-icons/fi';

function BackDropSlider({movieBackdrops}) {
    const [showBackdrop,setShowBackdrop] =useState(false)
    return (
        <>

<p className="text-center mt-3 toggle__screenshots" onClick={()=>setShowBackdrop(!showBackdrop)}>
{
    showBackdrop ? "Hide Screenshots " : "Show Screenshots "
} <FiCamera/>
</p>

        {
            showBackdrop ? 
       
      <div className="slider">
      
      {/* <h3  className="mt-5 text-white title__border">MOVIE BACKDROPS</h3> */}
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
      : ""
 }
      </>
    )
}

export default BackDropSlider
