import React from 'react'
import style from '../styles/homepage.module.css'
import Navbar from '../components/Navbar'
import bigLogo from "../assets/images/bigLogo.png"
import bgVideo from "../assets/images/backVideo.mp4";
import mobVideo from "../assets/images/backVideoMobile.mp4"
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
                />

                {children}
                <div className={style.midMainSection}>

                    <img className={style.bigLogo} src={bigLogo} />
                    <div className={style.descriptionText}>
                        The Ultimate Game <br />Marketplace
                    </div>
                    <button className={style.exploreBtn}>Explore Catalog</button>
                </div>
            </div>

        </>)

}
