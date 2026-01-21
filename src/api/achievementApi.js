const BASE_URL = "http://localhost:5000/api/achievements";

export const fetchAchievementsByGameId = async (gameId) => {
    const res = await fetch(`${BASE_URL}/game/${gameId}`);
    const data = await res.json();
    if (!res.ok) throw new Error("Failed to fetch achievements");
    return data;
};
