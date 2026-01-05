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
                <img src='https://images.unsplash.com/photo-1656761185428-951b06621492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBnYW1lJTIwY2hhcmFjdGVyfGVufDF8fHx8MTc2NzI2NzEwMXww&ixlib=rb-4.1.0&q=80&w=1080' />
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
