import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router';
import style from "../styles/componentsStyle/achievement.module.css";
import Achievements from "./Achievements";
import { fetchAchievementsByGameId } from "../api/achievementApi";

export default function AchievementsLayout() {
    const game = useOutletContext();
    const [achievements, setAchievements] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAchievementsByGameId(game._id)
            .then(setAchievements)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, [game]);

    if (loading) {
        return <p className={style.loading}>Loading achievements...</p>;
    }

    return (
        <div className={style.gridContainer}>
            {achievements.map(a => (
                <Achievements key={a._id} achievement={a} />
            ))}
        </div>
    );
}
