const BASE_URL = `${import.meta.env.VITE_SERVER_URL}/api/cart`;

const getAuthHeaders = () => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    const token = auth?.token;

    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };
};

export const fetchMyCart = async () => {
    const res = await fetch(BASE_URL, {
        headers: getAuthHeaders(),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data;
};

export const addToCartApi = async (gameId) => {
    const res = await fetch(`${BASE_URL}/add`, {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({ gameId }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data;
};

/* ✅ FIXED HERE */
export const updateCartQtyApi = async (gameId, quantity) => {
    const res = await fetch(`${BASE_URL}/update/${gameId}`, {
        method: "PATCH",
        headers: getAuthHeaders(),
        body: JSON.stringify({ quantity }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data;
};

export const removeCartItemApi = async (gameId) => {
    const res = await fetch(`${BASE_URL}/remove/${gameId}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data;
};

export const clearCartApi = async () => {
    const res = await fetch(`${BASE_URL}/clear`, {
        method: "DELETE",
        headers: getAuthHeaders(),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data;
};
