import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CategoriesTab from "../components/CategoriesTab";
import Card from "../components/Card";
import style from "../styles/browsepage.module.css";
import { fetchGames } from "../api/gameApi";
import { fetchRawgImages } from "../api/rawgApi";

export default function BrowsePage() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const loadGames = async () => {
            const dbGames = await fetchGames();

            const enriched = await Promise.all(
                dbGames.map(async (g) => {
                    const images = await fetchRawgImages(g.rawgId);
                    return { ...g, coverImage: images.background };
                })
            );

            setGames(enriched);
        };

        loadGames().catch(console.error);
    }, []);

    return (
        <div className={style.mainContainer}>
            <Navbar backgroundOn />
            <div className={style.divider} />

            <div className={style.middleContainer}>
                <CategoriesTab className={style.leftNav} />

                <div className={style.gamesContainer}>
                    {games.map(game => (
                        <Card key={game._id} game={game} />
                    ))}
                </div>
            </div>
        </div>
    );
}
