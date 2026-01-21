import React, { useEffect, useState } from "react";
import { useParams, Outlet, NavLink, Link } from "react-router";
import Navbar from "../components/Navbar";
import style from "../styles/productDetails.module.css";
import { fetchGameById } from "../api/gameApi";
import { fetchRawgImages } from "../api/rawgApi";

export default function ProductDetails() {
    const { id } = useParams();
    const [game, setGame] = useState(null);
    const [activeImage, setActiveImage] = useState("");

    useEffect(() => {
        const load = async () => {
            const dbGame = await fetchGameById(id);
            const images = await fetchRawgImages(dbGame.rawgId);

            setGame({ ...dbGame, images });
            setActiveImage(images.background);
        };

        load().catch(console.error);
    }, [id]);

    if (!game) {
        return (
            <>
                <Navbar backgroundOn />
                <div className={style.loading}>Loading...</div>
            </>
        );
    }

    return (
        <>
            <Navbar backgroundOn />

            <div className={style.page}>
                <Link to="/browse" className={style.back}>← Back</Link>

                <div className={style.topSection}>
                    <div className={style.imageSection}>
                        <img src={activeImage} className={style.heroImage} />

                        <div className={style.thumbnailRow}>
                            {game.images.screenshots.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    className={`${style.thumbnail} ${activeImage === img ? style.active : ""}`}
                                    onClick={() => setActiveImage(img)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className={style.infoSection}>
                        <h1>{game.title}</h1>

                        <div className={style.rating}>
                            ⭐ 4.5
                            {game.genres.map(g => (
                                <span key={g} className={style.genre}>{g}</span>
                            ))}
                        </div>

                        <div className={style.priceBox}>
                            <div>${game.price.toFixed(2)}</div>
                            <button>🛒 Add to Cart</button>
                            <button>♡ Wishlist</button>
                        </div>
                    </div>
                </div>

                <div className={style.tabs}>
                    <NavLink end to="">Overview</NavLink>
                    <NavLink to="achievements">Achievements</NavLink>
                </div>

                <Outlet />
            </div>
        </>
    );
}
