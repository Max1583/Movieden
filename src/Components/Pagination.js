import React,{useState} from 'react'
import '../Styles/pagination.scss'
import {Link} from 'react-router-dom'
import { HiArrowCircleRight,HiArrowCircleLeft} from 'react-icons/hi';

// const pages =[1,2,3,4,5,6,7,8,9,10,11]

function Pagination({popularPageId,type}) {
    var popularIdToInt=parseInt(popularPageId )
    const prev=popularIdToInt-1 ;
    const next=popularIdToInt+1  ;
  
    
    return (
       
            <div aria-label="Page navigation  my-3 p-5 ">
  <ul className="pagination justify-content-center ">
  <li className={(popularIdToInt > 1) ? "page-item " :"page-item disabled opacity-25" }>
      
      <Link 
      className="page-link p-2" 
      tabIndex="-1" 
      to={`/popular/${type}/page/${prev}`}>
       <HiArrowCircleLeft /> Previous
        </Link>

    </li>
      {/* {
          pages.map((page)=>(
            <li className="page-item ">
            <Link className="page-link" to={`${path}${page}`}>{page}</Link>
            
                </li>
          ))
      } */}
 
   
 <li className={(popularIdToInt < 500) ? "page-item " :"page-item disabled opacity-25" }>
      
      <Link 
      className="page-link p-2 px-3" 
      tabIndex="-1" 
       to={`/popular/${type}/page/${next}`}>
         Next <HiArrowCircleRight />
         </Link>
{console.log()}
    </li>
  </ul>
</div>
       
    )
}

export default Pagination
