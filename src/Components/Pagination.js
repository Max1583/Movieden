import React, { useState } from 'react'
import '../Styles/pagination.scss'
import { Link } from 'react-router-dom'
import { HiArrowCircleRight, HiArrowCircleLeft } from 'react-icons/hi';

function Pagination({ PageNumber, type, pageName }) {
  var popularIdToInt = parseInt(PageNumber)
  const prev = popularIdToInt - 1;
  const next = popularIdToInt + 1;


  return (

    <div aria-label="Page navigation  my-3 p-5  mt-5">
      <div className="mt-3"></div>
      <ul className="pagination justify-content-center ">
        <li className={(popularIdToInt > 1) ? "page-item " : "page-item disabled opacity-25"}>

          <Link
            className="page-link p-2"
            tabIndex="-1"
            to={type ? `/${pageName}/${type}/page/${prev}` : `/${pageName}/page/${prev}`}>
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


        <li className={(popularIdToInt < 500) ? "page-item " : "page-item disabled opacity-25"}>

          <Link
            className="page-link p-2 px-3"
            tabIndex="-1"
            to={type ? `/${pageName}/${type}/page/${next}` : `/${pageName}/page/${next}`}>
            Next <HiArrowCircleRight />
          </Link>
          {/* {console.log()} */}
        </li>
      </ul>
    </div>

  )
}

export default Pagination
