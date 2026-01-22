import { Link } from "react-router";
import style from "../styles/componentsStyle/similarGames.module.css";
import { FaStar } from "react-icons/fa";

export default function SimilarGamesCard({ game }) {
    console.log("SIMILAR GAME:", game);

    if (!game) return null;
    return (
        <Link to={`/browse/details/${game._id}`} className={style.card}>
            <img
                src={
                    game.images?.background ||
                    "https://placehold.co/300x170/0f0f0f/b90e0a?text=Game"
                }
                alt={game.title}
            />
            <div className={style.bottomSection}>
                <div className={style.title}>
                    <p>{game.title}</p>
                </div>

                <div className={style.bottom}>
                    <div className={style.gameRating}>
                        <FaStar /> 4.5
                    </div>

                    <p className={style.price}>${game.price}</p>
                </div>
            </div>
        </Link>
    );
}
