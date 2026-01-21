const BASE_URL = "http://localhost:5000/api/games";

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
