import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import style from "../styles/profile.module.css";
import { AuthContext } from "../context/AuthContext";
import { fetchProfile } from "../api/userApi";

export default function Profile() {
    const { auth } = useContext(AuthContext);
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        if (!auth.token) return;

        fetchProfile(auth.token)
            .then(setProfile)
            .catch(console.error);
    }, [auth.token]);

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
                    <div className={style.avatarSection}>
                        <div className={style.avatar}>
                            {profile.username.charAt(0).toUpperCase()}
                        </div>
                    </div>

                    <div className={style.infoSection}>
                        <h1 className={style.username}>{profile.username}</h1>

                        <div className={style.title}>
                            {profile.title}
                        </div>

                        <div className={style.status}>
                            <span className={style.dot}></span>
                            Brand Status: {profile.status}
                        </div>
                    </div>

                    <button className={style.editBtn}>
                        ✎ Edit Profile
                    </button>
                </div>
            </div>
        </>
    );
}
