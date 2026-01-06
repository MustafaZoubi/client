import React from 'react'
import style from "../styles/componentsStyle/achievement.module.css"
import { LuTrophy } from "react-icons/lu";

export default function Achievements() {
    return (
        <div className={style.achievementsContainer}>
            <div className={style.trophyBackground}>
                <LuTrophy className={style.icon} />
            </div>
            <div className={style.textContainer}>
                <p className={style.first}>First Blood</p>
                <p className={style.second}>Defeat your first enemy</p>
                <p className={style.third}>95% unlocked</p>
            </div>
        </div>
    )
}
