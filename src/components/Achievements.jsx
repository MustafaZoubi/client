import React from "react";
import { LuTrophy } from "react-icons/lu";
import style from "../styles/componentsStyle/achievement.module.css";

export default function Achievements({ achievement }) {
    return (
        <div className={style.achievementsContainer}>
            <div className={style.trophyBackground}>
                <LuTrophy className={style.icon} />
            </div>

            <div className={style.textContainer}>
                <p className={style.first}>{achievement.title}</p>
                <p className={style.second}>{achievement.description}</p>
                <p className={style.third}>100% unlocked</p>
            </div>
        </div>
    );
}
