import React, { useEffect, useState } from "react";
import { Outlet, useParams, Link } from "react-router";
import Navbar from "../components/Navbar";
import style from "../styles/productDetails.module.css";
import ImageCarousel from "../components/ImageCarousel";
import { IoIosArrowBack } from "react-icons/io";
import { FaStar, FaRegHeart, FaHeart, FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { MdOutlineMonitor } from "react-icons/md";
import SimilarGamesCard from "../components/SimilarGamesCard";
import { fetchGameById } from "../api/gameApi";
import { addToCartApi } from "../api/cartApi";
import CartToast from "../components/CartToast";
import { toggleWishlistApi } from "../api/wishlistApi";

export default function ProductDetails() {
    const { id } = useParams();

    const [game, setGame] = useState(null);
    const [wishlist, setWishlist] = useState(false);
    const [nav, setNav] = useState(true);
    const [showToast, setShowToast] = useState(false);

    const handleAddToCart = async () => {
        try {
            await addToCartApi(game._id, 1);
            setShowToast(true);
        } catch (e) {
            console.error(e);
        }
    };

    const toggleWishlist = async () => {
        try {
            await toggleWishlistApi(id);
            setWishlist((prev) => !prev);
        } catch (e) {
            console.error(e.message);
        }
    };

    useEffect(() => {
        fetchGameById(id)
            .then(setGame)
            .catch(console.error);
    }, [id]);

    if (!game) return null;

    return (
        <div className={style.mainContainer}>
            <Navbar backgroundOn />

            <CartToast
                show={showToast}
                onClose={() => setShowToast(false)}
            />

            <div className={style.middleContainer}>
                <div className={style.back}>
                    <IoIosArrowBack />
                    <Link to="../browse">Back to Browse</Link>
                </div>

                <div className={style.firstSection}>
                    <ImageCarousel images={game.images} />

                    <div className={style.shortInfo}>
                        <p className={style.gameTitle}>{game.title}</p>

                        <div className={style.gameRating}>
                            <FaStar /> 4.5
                        </div>

                        <div className={style.gameCategory}>
                            {game.genres?.[0]}
                        </div>

                        <div className={style.purchaseDetails}>
                            <p>${game.price}</p>

                            <button onClick={handleAddToCart}>
                                <IoCartOutline />
                                Add to Cart
                            </button>

                            {/* ❤️ WISHLIST BUTTON */}
                            <button
                                onClick={toggleWishlist}
                                className={`${style.secondBtn} ${wishlist ? style.wishlistActive : ""
                                    }`}
                            >
                                {wishlist ? <FaHeart /> : <FaRegHeart />}
                                {wishlist ? "Wishlisted" : "Wishlist"}
                            </button>
                        </div>

                        <div className={style.shortDetailedInfo}>
                            <div className={style.line}>
                                <p>
                                    <SlCalender /> Release Date
                                </p>
                                <p>
                                    {new Date(
                                        game.releaseDate
                                    ).toLocaleDateString()}
                                </p>
                            </div>

                            <div className={style.line}>
                                <p>
                                    <FaRegUser /> Publisher
                                </p>
                                <p>{game.publisher}</p>
                            </div>

                            <div className={style.line}>
                                <p>
                                    <MdOutlineMonitor /> Platforms
                                </p>
                                <p className={style.platforms}>
                                    {game.platforms.pc && <span>PC</span>}
                                    {game.platforms.playstation && (
                                        <span>PlayStation</span>
                                    )}
                                    {game.platforms.xbox && <span>Xbox</span>}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <ul className={style.nav}>
                        <li
                            onClick={() => setNav(true)}
                            className={nav ? style.selected : ""}
                        >
                            <Link to="overview">Overview</Link>
                        </li>

                        <li
                            onClick={() => setNav(false)}
                            className={!nav ? style.selected : ""}
                        >
                            <Link to="achievements">Achievements</Link>
                        </li>
                    </ul>

                    <div className={style.divider}></div>
                </div>

                <div className={style.bottomSection}>
                    <Outlet context={game} />

                    <div className={style.similarGames}>
                        <p className={style.heading}>Similar Games</p>
                        <SimilarGamesCard />
                        <SimilarGamesCard />
                    </div>
                </div>
            </div>
        </div>
    );
}
