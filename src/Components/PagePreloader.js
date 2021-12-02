import React from 'react'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import '../Styles/page__preloader.scss'
import { FaPlayCircle } from 'react-icons/fa';


function PagePreloader({fullWidth}) {
    // setTimeout(setLoading(false), 30000)

    return (
        <div className={` page__preloader ${fullWidth} `} >
              <Loader
        type="BallTriangle"
        color="#c2f02e"
        height={70}
        width={70}
        timeout={0} //3 secs
      />
       <div  className="logo  text-center navbar-brand">
            <span><FaPlayCircle/>MOVIE</span><span>DEN </span>
        </div>
        </div>
    )
}

export default PagePreloader
