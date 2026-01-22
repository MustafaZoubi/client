import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import style from "../styles/profile.module.css";
import { AuthContext } from "../context/AuthContext";
import { fetchProfile, updateProfileApi } from "../api/userApi";
import {
    fetchWishlist,
    removeWishlistItemApi,
} from "../api/wishlistApi";

export default function Profile() {
    const { auth, login } = useContext(AuthContext);

    const [profile, setProfile] = useState(null);
    const [editMode, setEditMode] = useState(false);

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [wishlist, setWishlist] = useState([]);
    const [wishlistLoading, setWishlistLoading] = useState(true);

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

        fetchWishlist()
            .then((data) => setWishlist(data.items || []))
            .finally(() => setWishlistLoading(false));
    }, [auth.token]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        const updated = await updateProfileApi(auth.token, form);
        setProfile(updated.user);
        login({ user: updated.user, token: auth.token });
        setEditMode(false);
    };

    const removeFromWishlist = async (gameId) => {
        const updated = await removeWishlistItemApi(gameId);
        setWishlist(updated.items);
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
        <div className={style.profilePage}>
            <Navbar backgroundOn />

            <div className={style.profileMiddle}>
                <div className={style.profileScroll}>

                    {/* PROFILE CARD */}
                    <div className={style.card}>
                        <div className={style.avatar}>
                            {profile.username.charAt(0).toUpperCase()}
                        </div>

                        <div className={style.infoSection}>
                            {!editMode ? (
                                <>
                                    <h1 className={style.username}>
                                        {profile.username}
                                    </h1>
                                    <p className={style.email}>
                                        {profile.email}
                                    </p>
                                    <p className={style.role}>
                                        {profile.role.toUpperCase()}
                                    </p>
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
                            <button
                                className={style.editBtn}
                                onClick={() => setEditMode(true)}
                            >
                                ✎ Edit Profile
                            </button>
                        ) : (
                            <div className={style.actions}>
                                <button
                                    className={style.saveBtn}
                                    onClick={handleSave}
                                >
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

                    {/* WISHLIST */}
                    <div className={style.wishlistCard}>
                        <h2 className={style.wishlistTitle}>
                            Your Wishlist
                        </h2>

                        {wishlistLoading ? (
                            <p className={style.loadingText}>
                                Loading wishlist...
                            </p>
                        ) : wishlist.length === 0 ? (
                            <p className={style.emptyText}>
                                Your wishlist is empty.
                            </p>
                        ) : (
                            <div className={style.wishlistGrid}>
                                {wishlist.map((item) => (
                                    <div
                                        key={item.game._id}
                                        className={style.wishlistItem}
                                    >
                                        <div>
                                            <p className={style.gameName}>
                                                {item.game.title}
                                            </p>
                                            <p className={style.gamePrice}>
                                                ${item.game.price}
                                            </p>
                                        </div>

                                        <button
                                            className={style.removeWishlistBtn}
                                            onClick={() =>
                                                removeFromWishlist(
                                                    item.game._id
                                                )
                                            }
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}
