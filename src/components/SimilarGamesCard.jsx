import React from 'react'
import style from "../styles/componentsStyle/similarGames.module.css"
import { FaStar } from "react-icons/fa";

export default function SimilarGamesCard() {
    return (
        <div className={style.card}>
            <img src='https://media.rawg.io/media/games/1c0/1c0548b761f7c4e4c0da71172b3362bf.jpg' />
            <div className={style.bottomSection}>
                <div className={style.title}>
                    <p>Metal Gear Solid Delta: Snake Eater</p>
                </div>
                <div className={style.bottom}>
                    <div className={style.gameRating}>
                        <FaStar />
                        4.5
                    </div>
                    <p className={style.price}>
                        $44.99
                    </p>
                </div>

            </div>
        </div>

    )
}
