export const fetchGameById = async (id) => {
    const res = await fetch(`http://localhost:5000/api/games/${id}`);
    const data = await res.json();

    if (!res.ok) throw new Error(data.message);
    return data;
};
