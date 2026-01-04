import React from 'react'
import style from '../styles/homepage.module.css'
import Navbar from '../components/Navbar'
import bigLogo from "../assets/images/bigLogo.png"
import bgVideo from "../assets/images/backVideo.mp4";
import { Link } from "react-router"
import backPic from "../assets/images/backPic.jpg"
export default function Homepage({ children }) {
    return (
        <>
            <div className={style.mainContainer}>
                <video
                    className={style.bgVideo}
                    src={bgVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster={backPic}
                />

                {children}
                <div className={style.midMainSection}>

                    <img className={style.bigLogo} src={bigLogo} />
                    <div className={style.descriptionText}>
                        The Ultimate Game <br />Marketplace
                    </div>
                    <button className={style.exploreBtn}><Link to="browse">Explore Catalog</Link></button>
                </div>
            </div>

        </>)

}
