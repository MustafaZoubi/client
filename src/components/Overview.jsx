import React, { useContext } from 'react'
import { useOutletContext } from 'react-router'
import style from "../styles/componentsStyle/overview.module.css"
function Overview() {
    const message = useOutletContext()
    return (
        <div className={style.overview}>
            <div className={style.aboutContainer}>
                <p className={style.title}>About This Game</p>
                <p className={style.description}>Sired in an act of vampire insurrection, your existence ignites the war for Seattle's blood trade. Enter uneasy alliances with the creatures who control the city and uncover the sprawling conspiracy which plunged Seattle into a bloody civil war between powerful vampire factions.
                </p>
            </div>
            <div className={style.requirments}>
                <p className={style.title}>System Requirments</p>
                <div className={style.unkonwName}>
                    <div className={style.minimum}>
                        <p>Minimum</p>
                        <div className={style.divider}></div>
                        <div>
                            <p className={style.one}>Os</p>
                            <p>Windows 10 64-bit
                            </p>
                        </div>
                        <div>
                            <p className={style.one}>Processor</p>
                            <p>Intel Core i5-8400</p>
                        </div>
                        <div>
                            <p className={style.one}>Memory</p>
                            <p>8 GB RAM</p>
                        </div>
                        <div>
                            <p className={style.one}>Graphics</p>
                            <p>NVIDIA GTX 1060 6GB</p>
                        </div>
                        <div>
                            <p className={style.one}>Storage</p>
                            <p>50 GB</p>
                        </div>
                    </div>
                    <div className={style.recommended}>
                        <p>Recommended</p>
                        <div className={style.divider}></div>
                        <div>
                            <p className={style.one}>Os</p>
                            <p>Windows 11 64-bit</p>
                        </div>
                        <div>
                            <p className={style.one}>Processor</p>
                            <p>Intel Core i7-10700K</p>
                        </div>
                        <div>
                            <p className={style.one}>Memory</p>
                            <p>16 GB RAM</p>
                        </div>
                        <div>
                            <p className={style.one}>Graphics</p>
                            <p>NVIDIA RTX 3070</p>
                        </div>
                        <div>
                            <p className={style.one}>Storage</p>
                            <p>50 GB SSD</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Overview