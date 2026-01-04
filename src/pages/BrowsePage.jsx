import React from 'react'
import Card from "../components/Card.jsx"
import Navbar from "../components/Navbar.jsx"
import CategoriesTab from '../components/CategoriesTab.jsx'
import style from "../styles/browsepage.module.css"
function BrowsePage() {
    return (
        <div className={style.mainContainer}>
            <Navbar backgroundOn={true} />
            <div className={style.divider}></div>
            <div className={style.middleContainer}>
                <CategoriesTab />
                <div className={style.gamesContainer}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>


        </div>






    )
}

export default BrowsePage