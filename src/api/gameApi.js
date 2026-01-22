const BASE_URL = `${import.meta.env.VITE_SERVER_URL}/api/games`;

export const fetchGames = async () => {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    if (!res.ok) throw new Error("Failed to fetch games");
    return data;
};

export const fetchGameById = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`);
    const data = await res.json();
    if (!res.ok) throw new Error("Failed to fetch game");
    return data;
};

export const fetchSimilarGames = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}/similar`);
    const data = await res.json();
    if (!res.ok) throw new Error("Failed to fetch similar games");
    return data;
};
