export default function Card({ game }) {
    if (!game) return null;

    return (
        <Link to={`details/${game._id}`}>
            <div className={style.card}>
                <img
                    src={game.images?.background}
                    alt={game.title}
                />

                <div className={style.bottomSection}>
                    <div className={style.cost}>
                        <p>Add to cart +</p>
                        <p>${game.price.toFixed(2)}</p>
                    </div>

                    <div className={style.icons}>
                        {game.platforms?.pc && <img src={windows} />}
                        {game.platforms?.playstation && <img src={playstation} />}
                        {game.platforms?.xbox && <img src={xbox} />}
                    </div>

                    <p className={style.title}>{game.title}</p>
                </div>
            </div>
        </Link>
    );
}
