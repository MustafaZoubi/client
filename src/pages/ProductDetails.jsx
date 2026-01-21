import React, { useEffect, useState } from "react";
import { useParams, Outlet, Link, NavLink } from "react-router";
import Navbar from "../components/Navbar";
import style from "../styles/productDetails.module.css";
import { fetchGameById } from "../api/gameApi";

export default function ProductDetails() {
    const { id } = useParams();
    const [game, setGame] = useState(null);
    const [activeImage, setActiveImage] = useState("");

    useEffect(() => {
        fetchGameById(id)
            .then((data) => {
                setGame(data);
                setActiveImage(data.images.background);
            })
            .catch(console.error);
    }, [id]);

    if (!game) {
        return (
            <>
                <Navbar backgroundOn />
                <div className={style.loading}>Loading game...</div>
            </>
        );
    }

    return (
        <>
            <Navbar backgroundOn />

            <div className={style.page}>
                {/* Back */}
                <Link to="/browse" className={style.back}>
                    ← Back to Browse
                </Link>

                {/* TOP SECTION */}
                <div className={style.topSection}>
                    {/* LEFT: IMAGES */}
                    <div className={style.imageSection}>
                        <img
                            src={activeImage}
                            alt={game.title}
                            className={style.heroImage}
                        />

                        <div className={style.thumbnailRow}>
                            {game.images.screenshots.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt="screenshot"
                                    className={`${style.thumbnail} ${activeImage === img ? style.active : ""
                                        }`}
                                    onClick={() => setActiveImage(img)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: INFO */}
                    <div className={style.infoSection}>
                        <h1 className={style.title}>{game.title}</h1>

                        <div className={style.rating}>
                            ⭐ 4.5
                            {game.genres?.map((g) => (
                                <span key={g} className={style.genre}>
                                    {g}
                                </span>
                            ))}
                        </div>

                        <div className={style.priceBox}>
                            <div className={style.price}>${game.price.toFixed(2)}</div>
                            <button className={style.cartBtn}>🛒 Add to Cart</button>
                            <button className={style.wishlistBtn}>♡ Wishlist</button>
                        </div>

                        <div className={style.meta}>
                            <div>
                                <span>Release Date</span>
                                <p>{new Date(game.releaseDate).toLocaleDateString()}</p>
                            </div>

                            <div>
                                <span>Publisher</span>
                                <p>{game.publisher}</p>
                            </div>

                            <div>
                                <span>Platforms</span>
                                <p>
                                    {game.platforms?.pc && "PC "}
                                    {game.platforms?.playstation && "PlayStation "}
                                    {game.platforms?.xbox && "Xbox "}
                                    {game.platforms?.switch && "Switch"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TABS */}
                <div className={style.tabs}>
                    <NavLink
                        end
                        to=""
                        className={({ isActive }) =>
                            isActive ? style.activeTab : style.tab
                        }
                    >
                        Overview
                    </NavLink>

                    <NavLink
                        to="achievements"
                        className={({ isActive }) =>
                            isActive ? style.activeTab : style.tab
                        }
                    >
                        Achievements
                    </NavLink>
                </div>

                {/* TAB CONTENT */}
                <Outlet context={{ game }} />
            </div>
        </>
    );
}
