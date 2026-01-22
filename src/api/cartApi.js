const BASE_URL = "http://localhost:5000/api/cart";

const authHeaders = () => {
    const token = localStorage.getItem("token");
    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };
};

export const fetchMyCart = async () => {
    const res = await fetch(BASE_URL, { headers: authHeaders() });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to fetch cart");
    return data;
};

export const addToCartApi = async (gameId, quantity = 1) => {
    const res = await fetch(`${BASE_URL}/add`, {
        method: "POST",
        headers: authHeaders(),
        body: JSON.stringify({ gameId, quantity }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to add to cart");
    return data;
};

export const updateCartQtyApi = async (gameId, quantity) => {
    const res = await fetch(`${BASE_URL}/item/${gameId}`, {
        method: "PATCH",
        headers: authHeaders(),
        body: JSON.stringify({ quantity }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to update quantity");
    return data;
};

export const removeCartItemApi = async (gameId) => {
    const res = await fetch(`${BASE_URL}/item/${gameId}`, {
        method: "DELETE",
        headers: authHeaders(),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to remove item");
    return data;
};

export const clearCartApi = async () => {
    const res = await fetch(`${BASE_URL}/clear`, {
        method: "POST",
        headers: authHeaders(),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to clear cart");
    return data;
};
