import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Achievements from "./Achievements";
import style from "../styles/componentsStyle/achievement.module.css";
import { fetchAchievementsByGameId } from "../api/achievementApi";

export default function AchievementsLayout() {
  const { id } = useParams();
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    fetchAchievementsByGameId(id)
      .then(setAchievements)
      .catch(console.error);
  }, [id]);

  return (
    <div className={style.gridContainer}>
      {achievements.map(a => (
        <Achievements key={a._id} achievement={a} />
      ))}
    </div>
  );
}
