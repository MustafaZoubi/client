import React from 'react'
import style from "../styles/categoriesTab.module.css"
import { FaStar, FaFire, FaCrown, FaWindows, FaPlaystation, FaXbox, FaChessKnight } from "react-icons/fa";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { IoMdTrophy } from "react-icons/io";
import { FaPeopleGroup, FaGun, FaMountain, FaPuzzlePiece, FaCarSide } from "react-icons/fa6";
import { BsNintendoSwitch } from "react-icons/bs";
import { RiBoxingFill, RiSwordFill } from "react-icons/ri";
import { MdSportsCricket } from "react-icons/md";

export default function CategoriesTab({ className, mobileNav, onFilter }) {
    return (
        <div className={`${style.navFilter} ${className} ${mobileNav}`}>
            {/* Section 1 */}
            <div className={style.section}>
                New Releases
                <div className={style.subSection}>
                    <div className={style.iconContainer}>
                        <FaStar className={style.icon} />
                    </div>
                    <p>Last 30 Days</p>
                </div>
                <div className={style.subSection}>
                    <div className={style.iconContainer}>
                        <FaFire className={style.icon} />
                    </div>
                    <p>This Week</p>
                </div>
                <div className={style.subSection}>
                    <div className={style.iconContainer}>
                        <TbPlayerTrackNextFilled className={style.icon} />
                    </div>
                    <p>Next Week</p>
                </div>
            </div>

            {/* Section 2 */}
            <div className={style.section}>
                Top
                <div className={style.subSection}>
                    <div className={style.iconContainer}>
                        <IoMdTrophy className={style.icon} />
                    </div>
                    <p>Best of the Year</p>
                </div>
                <div className={style.subSection}>
                    <div className={style.iconContainer}>
                        <FaPeopleGroup className={style.icon} />
                    </div>
                    <p>Popular in 2025</p>
                </div>
                <div className={style.subSection}>
                    <div className={style.iconContainer}>
                        <FaCrown className={style.icon} />
                    </div>
                    <p>All Time Top</p>
                </div>
            </div>

            {/* Section 3 — PLATFORMS (FUNCTIONAL) */}
            <div className={style.section}>
                Platforms
                <div
                    className={style.subSection}
                    onClick={() => onFilter?.({ type: "platform", value: "pc" })}
                >
                    <div className={style.iconContainer}>
                        <FaWindows className={style.icon} />
                    </div>
                    <p>PC</p>
                </div>

                <div
                    className={style.subSection}
                    onClick={() => onFilter?.({ type: "platform", value: "playstation" })}
                >
                    <div className={style.iconContainer}>
                        <FaPlaystation className={style.icon} />
                    </div>
                    <p>PlayStation</p>
                </div>

                <div
                    className={style.subSection}
                    onClick={() => onFilter?.({ type: "platform", value: "xbox" })}
                >
                    <div className={style.iconContainer}>
                        <FaXbox className={style.icon} />
                    </div>
                    <p>Xbox One</p>
                </div>

                <div
                    className={style.subSection}
                    onClick={() => onFilter?.({ type: "platform", value: "switch" })}
                >
                    <div className={style.iconContainer}>
                        <BsNintendoSwitch className={style.icon} />
                    </div>
                    <p>Nintendo Switch</p>
                </div>
            </div>

            {/* Section 4 — GENRES (FUNCTIONAL) */}
            <div className={style.section}>
                Genres
                <div
                    className={style.subSection}
                    onClick={() => onFilter?.({ type: "genre", value: "Action" })}
                >
                    <div className={style.iconContainer}>
                        <RiBoxingFill className={style.icon} />
                    </div>
                    <p>Action</p>
                </div>

                <div
                    className={style.subSection}
                    onClick={() => onFilter?.({ type: "genre", value: "Strategy" })}
                >
                    <div className={style.iconContainer}>
                        <FaChessKnight className={style.icon} />
                    </div>
                    <p>Strategy</p>
                </div>

                <div
                    className={style.subSection}
                    onClick={() => onFilter?.({ type: "genre", value: "RPG" })}
                >
                    <div className={style.iconContainer}>
                        <RiSwordFill className={style.icon} />
                    </div>
                    <p>RPG</p>
                </div>

                <div
                    className={style.subSection}
                    onClick={() => onFilter?.({ type: "genre", value: "Shooter" })}
                >
                    <div className={style.iconContainer}>
                        <FaGun className={style.icon} />
                    </div>
                    <p>Shooter</p>
                </div>

                <div
                    className={style.subSection}
                    onClick={() => onFilter?.({ type: "genre", value: "Adventure" })}
                >
                    <div className={style.iconContainer}>
                        <FaMountain className={style.icon} />
                    </div>
                    <p>Adventure</p>
                </div>

                <div
                    className={style.subSection}
                    onClick={() => onFilter?.({ type: "genre", value: "Puzzle" })}
                >
                    <div className={style.iconContainer}>
                        <FaPuzzlePiece className={style.icon} />
                    </div>
                    <p>Puzzle</p>
                </div>

                {/* Design-only */}
                <div className={style.subSection}>
                    <div className={style.iconContainer}>
                        <FaCarSide className={style.icon} />
                    </div>
                    <p>Racing</p>
                </div>

                <div className={style.subSection}>
                    <div className={style.iconContainer}>
                        <MdSportsCricket className={style.icon} />
                    </div>
                    <p>Sports</p>
                </div>
            </div>
        </div>
    )
}
