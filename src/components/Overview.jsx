import React from 'react';
import { useOutletContext } from 'react-router';
import style from "../styles/componentsStyle/overview.module.css";

function Overview() {
    const game = useOutletContext();

    return (
        <div className={style.overview}>
            <div className={style.aboutContainer}>
                <p className={style.title}>About This Game</p>
                <p className={style.description}>{game.description}</p>
            </div>

            <div className={style.requirments}>
                <p className={style.title}>System Requirements</p>

                <div className={style.unkonwName}>
                    <div className={style.minimum}>
                        <p>Minimum</p>
                        <div className={style.divider}></div>

                        {Object.entries(game.systemRequirements.minimum).map(([k, v]) => (
                            <div key={k}>
                                <p className={style.one}>{k}</p>
                                <p>{v}</p>
                            </div>
                        ))}
                    </div>

                    <div className={style.recommended}>
                        <p>Recommended</p>
                        <div className={style.divider}></div>

                        {Object.entries(game.systemRequirements.recommended).map(([k, v]) => (
                            <div key={k}>
                                <p className={style.one}>{k}</p>
                                <p>{v}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;
