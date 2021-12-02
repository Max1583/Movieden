import React,{useState} from 'react'
import { FiDisc,FiDollarSign } from 'react-icons/fi';
import { FaRegCalendarAlt,FaHourglassEnd,FaFunnelDollar,FaStar } from 'react-icons/fa';
import DownloadLinks from './DownloadLinks';

function MovieInfos({movieDetails,genre,ytKey}) {
  // console.log(movieDetails);
  const [ratings,setRatings] = useState()
    return (
      
        <div className="container movie-details" key={movieDetails.id}>
    <section className="row py-3" >
       {/* movie__details__trailer */}
 <div className="col-12 justify-content-center align-items-center ">
   
   <iframe title={movieDetails.title} height="400" className="w-100" src={`https://www.youtube.com/embed/${ytKey}`}></iframe>
      </div>
  {/* movie__details__trailer */}

    {/* <section className="row p-3" style={{ background:`linear-gradient(#00000090, #00000090), url("${requests.imgURL}${movieDetails.backdrop_path}") center center / cover no-repeat`} } > */}
  <div className=" mt-3 d-flex flex-column flex-lg-row justify-content-between  ">
   <h2 className="grunge__text mt-2 mb-md-0 mb-3 pr-2 "> {movieDetails.title} </h2>
   {/* <a href={`http://www.youtube.com/watch?v=${ytKey}`} className="card__trailer__link py-2 text-center mt-3 mt-md-2  mb-3 " > <FaYoutube className="" /></a> */}
  </div>


 
<div className=" mt-3 text-white">
<aside className="d-inline" > <FiDisc /></aside>  <span className="genres" > {genre}</span>
</div>

<div className=" mt-3 text-white">
<span className="pr-4"><FaRegCalendarAlt />  {movieDetails.release_date }</span>  
<span className="" >  <FaHourglassEnd />  {movieDetails.runtime } mins</span> 
</div>

<div className=" mt-3 text-white">
<span className="" >
  < FaFunnelDollar /> {movieDetails.revenue===0 ?"N/A":new Intl.NumberFormat().format(movieDetails.revenue) }
  {/* <td scope="row">#{new Intl.NumberFormat().format(payment.amount)}  </td> */}
  
  </span>

<span className="" > <FiDollarSign />{movieDetails.budget===0 ?"N/A":new Intl.NumberFormat().format(movieDetails.budget) }</span> 

</div>

{/* <div className="col-12 mt-3 text-white">

{Math.round(movieDetails.vote_average/2) } < FaStar /> -  (IMDB)
</div> */}
<div className="col-12 mt-3">
  
      {/* <h4  className="overview_header text-white px-3 py-1 mt-3" >Description</h4> */}
  
<span className=" movie__overview mt-3" > {movieDetails.overview}</span> 
</div>
{/* CONTENT */}


<DownloadLinks title={movieDetails.title}/>
</section>



        </div>
    )
}

export default MovieInfos
