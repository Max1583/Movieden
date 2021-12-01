import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/btnFill.scss'
import { HiArrowCircleRight} from 'react-icons/hi';

function BtnFill({path,value}) {
    return (
       <div className="w-100 text-center mb-5">
            <Link to={path} className="btn_fill">
            {value} <HiArrowCircleRight className="fas fa-arrow-right" />
        </Link> 
       </div>
    )
}

export default BtnFill
