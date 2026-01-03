import React from 'react'
import Card from "../components/Card.jsx"
import style from "../styles/browsepage.module.css"
import Navbar from "../components/Navbar.jsx"
function BrowsePage() {
    return (
        <div className={style.mainContainer}>
            <Navbar backgroundOn={true} />
            <div className={style.divider}></div>

            <div className={style.gamesContainer}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

        </div>






    )
}

export default BrowsePage