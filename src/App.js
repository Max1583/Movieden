import React,{useState} from 'react'
import Home from './Pages/Home'
import Trending from './Pages/Trending'
import TvSeries from './Pages/TvSeries'
import InTheaters from './Pages/InTheaters'
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import MovieDetails from './Components/MovieDetails'
import Popular from './Pages/Popular'
import TvDetails from './Components/TvDetails'
import NotFound from './Pages/NotFound'
import Search from './Pages/Search'
import NetworkStatus from './Components/NetworkStatus'

function App() {
    const [networkStatus,setNetworkStatus] =useState(true)
    const checkConnection = () => {
         setNetworkStatus(navigator.onLine)
    }
    setInterval(checkConnection, 2000)
    return (
        <>
            {
                networkStatus ?


                    <div >
                        <Header />

                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/trending" element={<Trending />} />
                            <Route path="/popular/:type/page/:popularPageId" element={<Popular />} />
                            <Route path="/trending-TvSeries" element={<TvSeries />} />
                            <Route path="/in-Theaters" element={<InTheaters />} />
                            <Route path={`/MovieDetails/:linkId`} element={<MovieDetails />} />
                            <Route path={`/TvSeries/:tvId`} element={<TvDetails />} />
                            <Route path={`/Search/:searchValue`} element={<Search />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>

                    :
                    <NetworkStatus status={networkStatus} />
            }
        </>

    )
}
export default App