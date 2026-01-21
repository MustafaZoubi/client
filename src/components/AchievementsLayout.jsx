import React from 'react'
import style from "../styles/componentsStyle/achievement.module.css"
import Achievements from "./Achievements"
export default function AchievementsLayout() {
    return (
        <div className={style.gridContainer}>
            <Achievements />
            <Achievements />
            <Achievements />
            <Achievements />
            <Achievements />
            <Achievements />
            <Achievements />
        </div>
    )
}
