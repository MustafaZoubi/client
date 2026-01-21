import React, { useEffect, useState } from "react";
import style from "../styles/componentsStyle/achievement.module.css";
import Achievements from "./Achievements";
import { useParams } from "react-router";
import { fetchAchievementsByGameId } from "../api/achievementApi";

export default function AchievementsLayout() {
    const { id } = useParams();
    const [achievements, setAchievements] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        fetchAchievementsByGameId(id)
            .then((data) => setAchievements(data))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return <div className={style.loading}>Loading achievements...</div>;
    }

    return (
        <div className={style.gridContainer}>
            {achievements.map((a) => (
                <Achievements key={a._id} achievement={a} />
            ))}
        </div>
    );
}
