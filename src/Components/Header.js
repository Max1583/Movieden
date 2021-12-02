import React, { useState } from 'react'
import '../Styles/Header.scss'
import { Link } from 'react-router-dom'
import { FaPlayCircle } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { RiCloseLine } from 'react-icons/ri';
import { HiMenuAlt4 } from 'react-icons/hi';
import SearchOverlay from './SearchOverlay'


function Header() {

    const [isNav, setIsNav] = useState(false);
    const [isSearchOverlay, setIsSearchOverlay] = useState(false)

    const toggleNav = () => {
        setIsNav(!isNav);
    }

    return (
        <header className="sticky-top">

            <nav className="navbar d-flex justify-content-between container align-items-center ">
                <Link to="/" className="logo  text-center navbar-brand fs-2">
                    <span><FaPlayCircle />MOVIE</span><span>DEN </span>
                </Link>


                <div className="d-flex align-items-center" >

                    <div className="search__icon fs-5 mx-3">
                        < FiSearch onClick={() => setIsSearchOverlay(true)} />

                    </div>

                    <div className={isNav ? "nav__links d-inline mobileNavActive" : "nav__links d-inline "}>
                        <Link onClick={toggleNav} to="/" className="nav-link">Home</Link>
                        <Link onClick={toggleNav} to="/trending" className="nav-link">Trending (Movies)</Link>
                        <Link onClick={toggleNav} to="/trending-TvSeries" className="nav-link">Trending (TV Series)</Link>
                        <Link onClick={toggleNav} to="/in-Theaters" className="nav-link">In Theaters</Link>
                    </div>

                    <div className="nav__toggle d-block d-lg-none fs-5" onClick={toggleNav}>
                        {
                            isNav ? < RiCloseLine className="nav__close" /> : < HiMenuAlt4 />
                        }

                    </div>

                </div>


            </nav>

            <SearchOverlay setIsSearchOverlay={setIsSearchOverlay} isSearchOverlay={isSearchOverlay} />

        </header>
    )
}

export default Header
