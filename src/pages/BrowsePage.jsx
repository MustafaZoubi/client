import React, { useState } from 'react'
import Card from "../components/Card.jsx"
import Navbar from "../components/Navbar.jsx"
import CategoriesTab from '../components/CategoriesTab.jsx'
import style from "../styles/browsepage.module.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

function BrowsePage() {
    const [mobNav, setMobNav] = useState(false);

    return (
        <div className={style.mainContainer}>
            <Navbar backgroundOn={true} />
            <div className={style.divider}></div>
            <div className={style.middleContainer}>
                <CategoriesTab className={style.leftNav} />
                <div className={style.gamesContainer}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div onClick={() => setMobNav(!mobNav)} className={style.burgerMenu}>
                {mobNav ? (<IoCloseSharp />) : (<GiHamburgerMenu />)}
            </div>

            <CategoriesTab className={`${style.mobileNav} ${mobNav ? style.active : null}`} />

        </div>






    )
}

export default BrowsePage