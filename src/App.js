import React, { useEffect, useState } from 'react'
import Home from './Pages/Home'
import Trending from './Pages/Trending'
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import MovieDetails from './Components/MovieDetails'
import Popular from './Pages/Popular'
import TvDetails from './Components/TvDetails'
import NotFound from './Pages/NotFound'
import Search from './Pages/Search'
import NetworkStatus from './Components/NetworkStatus'
import AiringToday from './Pages/AiringToday'
import TopRated from './Pages/TopRated'
import Latest from './Pages/Latest'
import Upcoming from './Pages/Upcoming'
import OnAir from './Pages/OnAir'

// import Login from './components/Login';
// import firebase from './Firebase/firebase-config';
function App() {
    const [networkStatus, setNetworkStatus] = useState(true)
    const checkConnection = () => {
        setNetworkStatus(navigator.onLine)
    }
    setInterval(checkConnection, 2000)

    // const [user, setUser] = useState(null);

    // useEffect(() => {
    //     firebase.auth().onAuthStateChanged(user => {
    //         setUser(user);
    //     })
    // }, [])

    // console.log(user);
    return (
        <>
            {

                networkStatus ?


                    <div >
                        <Header />

                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/on-air/page/:onAirPage" element={<OnAir />} />
                            <Route path="/upcoming/page/:upcomingPage" element={<Upcoming />} />
                            <Route path="/latest/page/:latestPage" element={<Latest />} />
                            <Route path="/top-rated/page/:topRatedPage" element={<TopRated />} />
                            <Route path="/airing-today/page/:airingPage" element={<AiringToday />} />
                            <Route path="/trending/page/:trendingPage" element={<Trending />} />
                            <Route path="/popular/:type/page/:popularPageId" element={<Popular />} />
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