import React, { useState, useEffect } from 'react';
import Card from "../components/Card.jsx";
import Navbar from "../components/Navbar.jsx";
import CategoriesTab from '../components/CategoriesTab.jsx';
import style from "../styles/browsepage.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { fetchGames } from "../api/gameApi";

function BrowsePage() {
    const [mobNav, setMobNav] = useState(false);
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetchGames()
            .then(setGames)
            .catch(err => {
                console.error(err);
                setGames([]); // fail-safe
            });
    }, []);

    return (
        <div className={style.mainContainer}>
            <Navbar backgroundOn={true} />
            <div className={style.divider}></div>

            <div className={style.middleContainer}>
                <CategoriesTab className={style.leftNav} />

                <div className={style.gamesContainer}>
                    {games.map(game => (
                        <Card key={game._id} game={game} />
                    ))}
                </div>
            </div>

            <div
                onClick={() => setMobNav(!mobNav)}
                className={style.burgerMenu}
            >
                {mobNav ? <IoCloseSharp /> : <GiHamburgerMenu />}
            </div>

            <CategoriesTab
                className={`${style.mobileNav} ${mobNav ? style.active : ""}`}
            />
        </div>
    );
}

export default BrowsePage;
