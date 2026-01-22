const BASE_URL = `${import.meta.env.VITE_SERVER_URL}/api/achievements`;

export const fetchAchievementsByGameId = async (gameId) => {
    const res = await fetch(`${BASE_URL}/game/${gameId}`);
    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || "Failed to fetch achievements");
    }

    return data;
};
