const BASE_URL = "http://localhost:5000/api/wishlist";

const getAuthHeaders = () => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    const token = auth?.token;

    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };
};

export const fetchWishlist = async () => {
    const res = await fetch(BASE_URL, { headers: getAuthHeaders() });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data;
};

export const toggleWishlistApi = async (gameId) => {
    const res = await fetch(`${BASE_URL}/toggle`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({ gameId }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data;
};

export const removeWishlistItemApi = async (gameId) => {
    const res = await fetch(`${BASE_URL}/${gameId}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data;
};
