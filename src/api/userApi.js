const BASE_URL = `${import.meta.env.VITE_SERVER_URL}/api/user`;

export const fetchProfile = async (token) => {
    const res = await fetch(`${BASE_URL}/profile`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data;
};

export const updateProfileApi = async (token, payload) => {
    const res = await fetch(`${BASE_URL}/profile`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data;
};

//test