import React from 'react'
import style from "../styles/card.module.css"
import windows from "../assets/images/icons/windows.png"
import playstation from "../assets/images/icons/playstation.png"
import xbox from "../assets/images/icons/xbox.png"
import { Link } from "react-router"

export default function Card() {
    return (
        <Link to="details/1">
            <div className={style.card}>
                <img src='https://media.rawg.io/media/games/526/526881e0f5f8c1550e51df3801f96ea3.jpg' />
                <div className={style.bottomSection}>
                    <div className={style.cost}>
                        <p>Add to cart +</p>
                        <p>$12.98</p>
                    </div>
                    <div className={style.icons}>
                        <img className={style.icon} src={windows} />
                        <img className={style.icon} src={playstation} />
                        <img className={style.icon} src={xbox} />
                    </div>
                    <p className={style.title}>
                        Vampire: The Masquerade – Bloodlines 2
                    </p>
                </div>

            </div>
        </Link>


    )
}
