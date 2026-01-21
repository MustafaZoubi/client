import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import style from "../styles/profile.module.css";
import { AuthContext } from "../context/AuthContext";
import { fetchProfile, updateProfileApi } from "../api/userApi";

export default function Profile() {
    const { auth, login } = useContext(AuthContext);

    const [profile, setProfile] = useState(null);
    const [editMode, setEditMode] = useState(false);

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        if (!auth.token) return;

        fetchProfile(auth.token).then((data) => {
            setProfile(data);
            setForm({
                username: data.username,
                email: data.email,
                password: "",
            });
        });
    }, [auth.token]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        try {
            const updated = await updateProfileApi(auth.token, form);

            setProfile(updated.user);
            login({ user: updated.user, token: auth.token }); // update navbar name
            setEditMode(false);
        } catch (err) {
            alert(err.message);
        }
    };

    if (!profile) {
        return (
            <>
                <Navbar backgroundOn />
                <div className={style.loading}>Loading profile...</div>
            </>
        );
    }

    return (
        <>
            <Navbar backgroundOn />

            <div className={style.profileContainer}>
                <div className={style.card}>
                    <div className={style.avatar}>
                        {profile.username.charAt(0).toUpperCase()}
                    </div>

                    <div className={style.info}>
                        {!editMode ? (
                            <>
                                <h1 className={style.username}>{profile.username}</h1>
                                <p className={style.email}>{profile.email}</p>
                                <p className={style.role}>{profile.role.toUpperCase()}</p>
                            </>
                        ) : (
                            <>
                                <input
                                    className={style.input}
                                    name="username"
                                    value={form.username}
                                    onChange={handleChange}
                                />

                                <input
                                    className={style.input}
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                />

                                <input
                                    className={style.input}
                                    type="password"
                                    name="password"
                                    placeholder="New password (optional)"
                                    value={form.password}
                                    onChange={handleChange}
                                />
                            </>
                        )}
                    </div>

                    {!editMode ? (
                        <button className={style.editBtn} onClick={() => setEditMode(true)}>
                            ✎ Edit Profile
                        </button>
                    ) : (
                        <div className={style.actions}>
                            <button className={style.saveBtn} onClick={handleSave}>
                                Save
                            </button>
                            <button
                                className={style.cancelBtn}
                                onClick={() => setEditMode(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
