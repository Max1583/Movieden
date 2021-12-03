import React from 'react'
import '../Styles/networkStatus.scss'
import { MdWifiOff,MdWifi } from 'react-icons/md';
import errImg from '../Img/err.svg'

function NetworkStatus({status}) {
    return (
        <div className="networkStatusBar">
            <div className={`${status}`}>
            {/* <MdWifiOff className="noNetworkIcon" /> */}

<img src={errImg} alt="error image" className="error__image"  />
            <p>NO signal...<span className="retry" onClick={() => window.location.reload(false)}>Retry</span></p>
            </div>
        </div>
    )
}

export default NetworkStatus
