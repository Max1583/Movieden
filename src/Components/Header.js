import React from 'react'
import '../Styles/Header.scss'
import {Link} from 'react-router-dom'
import { FaPlayCircle } from 'react-icons/fa';

function Header() {
    return (
        <header className="sticky-to">

<nav className="navbar d-flex justify-content-center align-items-center">
        <Link to="/" className="logo  text-center navbar-brand">
            <span><FaPlayCircle/>MOVIE</span><span>DEN </span>
        </Link>
</nav>
<nav className="sub-nav d-flex justify-content-start justify-content-md-center">
<Link to="/" className="nav-link">Home</Link>
<Link to="/trending" className="nav-link">Trending (Movies)</Link>
<Link to="/trending-TvSeries" className="nav-link">Trending (TV Series)</Link>
<Link to="/in-Theaters" className="nav-link">In Theaters</Link>
</nav>
            
        </header>
    )
}

export default Header
