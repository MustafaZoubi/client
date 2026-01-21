import React, { useEffect, useState } from "react";
import Card from "../components/Card.jsx";
import Navbar from "../components/Navbar.jsx";
import CategoriesTab from "../components/CategoriesTab.jsx";
import style from "../styles/browsepage.module.css";
import { fetchGames } from "../api/gameApi";

function BrowsePage() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetchGames().then(setGames).catch(console.error);
    }, []);

    return (
        <div className={style.mainContainer}>
            <Navbar backgroundOn={true} />
            <div className={style.divider}></div>

            <div className={style.middleContainer}>
                <CategoriesTab className={style.leftNav} />

                <div className={style.gamesContainer}>
                    {games.map((game) => (
                        <Card key={game._id} game={game} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BrowsePage;
