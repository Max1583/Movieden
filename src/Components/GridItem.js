import React from 'react'
import {Link} from 'react-router-dom';
import '../Styles/gridItem.scss'

function GridItem({colSize,background,value,path}) {
    return (
        <div className={`grid__item col-12 ${colSize} `} >
            <div className="w-100 h-100 m-1 d-flex justify-content-center align-items-center">
<Link to={`${path}`} style={{backgroundImage: `${background}`}}>{value}</Link>
            </div>
            
        </div>
    )
}

export default GridItem
