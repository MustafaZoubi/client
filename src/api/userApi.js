const BASE_URL = "http://localhost:5000/api/user";

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
