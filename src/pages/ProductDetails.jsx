import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router'
import Navbar from '../components/Navbar';
import style from "../styles/productDetails.module.css"
import ImageCarousel from '../components/ImageCarousel';
import { Link } from "react-router"
import { IoIosArrowBack } from "react-icons/io";
import { FaStar, FaRegHeart, FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { MdOutlineMonitor } from "react-icons/md";
import SimilarGamesCard from '../components/SimilarGamesCard';
export default function ProductDetails() {

    const { id } = useParams();
    const [wishlist, setWishlist] = useState(false);
    const [nav, setNav] = useState(true);


    return (
        <div className={style.mainContainer}>
            <Navbar backgroundOn={true} />
            <div className={style.middleContainer}>

                <div className={style.back} >
                    <IoIosArrowBack />
                    <Link to="../browse">Back to Browse</Link>
                </div>
                {/* //Image + Short Details */}
                <div className={style.firstSection}>
                    <ImageCarousel className={style.carousel} />
                    <div className={style.shortInfo}>
                        <p className={style.gameTitle}>Vampire: The Masquerade – Bloodlines 2</p>
                        <div className={style.gameRating}>
                            <FaStar />
                            4.5
                        </div>
                        <div className={style.gameCategory}>Action</div>
                        <div className={style.purchaseDetails}>
                            <p>$59.99</p>
                            <button><IoCartOutline />Add to Cart</button>
                            <button onClick={() => setWishlist(!wishlist)} className={`${style.secondBtn} ${wishlist ? style.wishlist : null}`}><FaRegHeart />Wishlist</button>
                        </div>
                        <div className={style.shortDetailedInfo}>
                            <div className={style.line}>
                                <p><SlCalender />Release Date</p>
                                <p>9/15/2024</p>
                            </div>
                            <div className={style.line}>
                                <p><FaRegUser />Publisher</p>
                                <p>Paradox Interactive</p>
                            </div>
                            <div className={style.line}>
                                <p><MdOutlineMonitor />Platforms</p>
                                <p className={style.platforms}>
                                    <span>PC</span>
                                    <span>PlayStation</span>
                                    <span>Xbox</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <ul className={style.nav}>
                        <li onClick={() => setNav(true)} className={`${nav ? style.selected : null}`}><Link to="overview">Overview</Link></li>
                        <li onClick={() => setNav(false)} className={`${!nav ? style.selected : null}`}><Link to="achievements">Achievements</Link></li>
                    </ul>
                    <div className={style.divider}></div>
                </div>
                <div className={style.bottomSection}>
                    <Outlet context={"hello"} />
                    <div className={style.similarGames}>
                        <p className={style.heading}>Similar Games</p>
                        <SimilarGamesCard />
                        <SimilarGamesCard />
                    </div>
                </div>
            </div>
        </div>
    )
}
