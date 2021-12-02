import React from 'react'
import {Link,useParams} from 'react-router-dom'
import { FaDownload } from 'react-icons/fa';
import '../Styles/downloadButton.scss'


function DownloadLinks({title}) {
    return (
        <div className="download__links flex-column my-5 flex-md-row  my-5">
            <a target="blank" className="download__link" href={`https://www.thenetnaija.com/search?folder=videos&t=${title}`}>
<FaDownload /> Download Link 1
            </a>
            <a className="download__link" target="blank"  href={`https://www1.thepiratebay3.to/s/?q=${title}`}>
<FaDownload /> Download Link 2
            </a>
        </div>
    )
}

export default DownloadLinks
