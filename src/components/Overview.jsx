import React, { useContext } from 'react'
import { useOutletContext } from 'react-router'
import style from "../styles/componentsStyle/overview.module.css"
function Overview() {
    const message = useOutletContext()
    return (
        <div className={style.container}>
            <p className={style.title}>About This Game</p>
            <p className={style.description}>Sired in an act of vampire insurrection, your existence ignites the war for Seattle's blood trade. Enter uneasy alliances with the creatures who control the city and uncover the sprawling conspiracy which plunged Seattle into a bloody civil war between powerful vampire factions.
            </p>

        </div>

    )
}

export default Overview