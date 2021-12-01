import React from 'react'
import Home from './Pages/Home'
import Trending from './Pages/Trending'
import TvSeries from './Pages/TvSeries'
import InTheaters from './Pages/InTheaters'
import {Routes,Route} from "react-router-dom";
import Header from './Components/Header';
import MovieDetails from './Components/MovieDetails'
import Popular from './Pages/Popular'
import TvDetails from './Components/TvDetails'
import NotFound from './Pages/NotFound'

 function App() {
    return (
        <>
        <Header />
       
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular/:type/page/:popularPageId" element={<Popular />} />
        {/* <Route path="/popularMovies/page/:popularPageId" element={<Popular />} /> */}
        <Route path="/trending-TvSeries" element={<TvSeries />} />
        <Route path="/in-Theaters" element={<InTheaters />} />
        <Route  path={`/MovieDetails/:linkId`} element={<MovieDetails />} />
        <Route  path={`/TvSeries/:tvId`} element={<TvDetails />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route  path="/MovieDetails" element={<MovieDetails />} /> */}
        </Routes>
        {/* onUpdate={() => window.scrollTo(0, 0)} */}
        </>
    )
}
export default App