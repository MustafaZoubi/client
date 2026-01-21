import React from 'react';
import style from "../styles/card.module.css";
import windows from "../assets/images/icons/windows.png";
import playstation from "../assets/images/icons/playstation.png";
import xbox from "../assets/images/icons/xbox.png";
import { Link } from "react-router";

export default function Card({ game }) {
    return (
        <Link to={`details/${game._id}`}>
            <div className={style.card}>
                <img
                    src={
                        game.images?.background ||
                        "https://via.placeholder.com/600x400?text=No+Image"
                    }
                    alt={game.title}
                />

                <div className={style.bottomSection}>
                    <div className={style.cost}>
                        <p>Add to cart +</p>
                        <p>${game.price.toFixed(2)}</p>
                    </div>

                    <div className={style.icons}>
                        {game.platforms?.pc && (
                            <img className={style.icon} src={windows} />
                        )}
                        {game.platforms?.playstation && (
                            <img className={style.icon} src={playstation} />
                        )}
                        {game.platforms?.xbox && (
                            <img className={style.icon} src={xbox} />
                        )}
                    </div>

                    <p className={style.title}>
                        {game.title}
                    </p>
                </div>
            </div>
        </Link>
    );
}
