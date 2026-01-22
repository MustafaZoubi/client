import React, { useState, useEffect } from "react";
import Card from "../components/Card.jsx";
import Navbar from "../components/Navbar.jsx";
import CategoriesTab from "../components/CategoriesTab.jsx";
import style from "../styles/browsepage.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { fetchGames } from "../api/gameApi";

function BrowsePage() {
    const [mobNav, setMobNav] = useState(false);
    const [games, setGames] = useState([]);
    const [filteredGames, setFilteredGames] = useState([]);

    const [selectedPlatform, setSelectedPlatform] = useState(null);
    const [selectedGenre, setSelectedGenre] = useState(null);

    useEffect(() => {
        fetchGames()
            .then((data) => {
                setGames(data);
                setFilteredGames(data);
            })
            .catch((err) => {
                console.error(err);
                setGames([]);
                setFilteredGames([]);
            });
    }, []);

    const handleFilter = ({ type, value }) => {
        let platform = selectedPlatform;
        let genre = selectedGenre;

        // TOGGLE behavior
        if (type === "platform") {
            platform = platform === value ? null : value;
            setSelectedPlatform(platform);
        }

        if (type === "genre") {
            genre = genre === value ? null : value;
            setSelectedGenre(genre);
        }

        // ALWAYS FILTER FROM ORIGINAL GAMES
        const result = games.filter((g) => {
            const platformMatch = platform
                ? g.platforms?.[platform] === true
                : true;

            const genreMatch = genre
                ? g.genres?.some(
                    (x) =>
                        x.toLowerCase() === genre.toLowerCase()
                )
                : true;

            return platformMatch && genreMatch;
        });

        setFilteredGames(result);
    };

    return (
        <div className={style.mainContainer}>
            <Navbar backgroundOn={true} />
            <div className={style.divider}></div>

            <div className={style.middleContainer}>
                <CategoriesTab
                    className={style.leftNav}
                    onFilter={handleFilter}
                />

                <div className={style.gamesContainer}>
                    {filteredGames.length === 0 ? (
                        <p style={{ color: "#aaa" }}>No games found</p>
                    ) : (
                        filteredGames.map((game) => (
                            <Card key={game._id} game={game} />
                        ))
                    )}
                </div>
            </div>

            <div
                onClick={() => setMobNav(!mobNav)}
                className={style.burgerMenu}
            >
                {mobNav ? <IoCloseSharp /> : <GiHamburgerMenu />}
            </div>

            <CategoriesTab
                className={`${style.mobileNav} ${mobNav ? style.active : ""
                    }`}
                onFilter={handleFilter}
            />
        </div>
    );
}

export default BrowsePage;
