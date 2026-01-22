import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import style from "../styles/cart.module.css";
import {
    fetchMyCart,
    updateCartQtyApi,
    removeCartItemApi,
    clearCartApi,
} from "../api/cartApi";
import { Link } from "react-router";
import { IoIosArrowBack } from "react-icons/io";

export default function CartPage() {
    const [cart, setCart] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errMsg, setErrMsg] = useState("");

    const load = () => {
        setLoading(true);
        setErrMsg("");
        fetchMyCart()
            .then(setCart)
            .catch((e) => setErrMsg(e.message))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        load();
    }, []);

    const changeQty = async (gameId, nextQty) => {
        try {
            const qty = Math.max(1, Math.min(99, Number(nextQty)));

            const updated = await updateCartQtyApi(gameId, qty);
            setCart(updated);
        } catch (e) {
            setErrMsg(e.message);
        }
    };

    const removeItem = async (gameId) => {
        try {
            const updated = await removeCartItemApi(gameId);
            setCart(updated);
        } catch (e) {
            setErrMsg(e.message);
        }
    };

    const clear = async () => {
        try {
            const updated = await clearCartApi();
            setCart(updated);
        } catch (e) {
            setErrMsg(e.message);
        }
    };

    return (
        <div className={style.mainContainer}>
            <Navbar backgroundOn={true} />

            <div className={style.middleContainer}>
                <div className={style.back}>
                    <IoIosArrowBack />
                    <Link to="../browse">Back to Browse</Link>
                </div>

                <div className={style.headerRow}>
                    <p className={style.title}>Your Cart</p>
                    <button className={style.clearBtn} onClick={clear}>
                        Clear Cart
                    </button>
                </div>

                {loading ? (
                    <div className={style.loading}>Loading...</div>
                ) : errMsg ? (
                    <div className={style.error}>{errMsg}</div>
                ) : cart?.items?.length ? (
                    <div className={style.grid}>
                        <div className={style.items}>
                            {cart.items.map((item) => (
                                <div key={item.game._id} className={style.itemRow}>
                                    <div className={style.left}>
                                        <p className={style.gameName}>{item.game.title}</p>
                                        <p className={style.price}>${item.game.price}</p>
                                    </div>

                                    <div className={style.qty}>
                                        <button
                                            className={style.qtyBtn}
                                            disabled={item.quantity <= 1}
                                            onClick={() => changeQty(item.game._id, item.quantity - 1)}
                                        >
                                            -
                                        </button>

                                        <p className={style.qtyNum}>{item.quantity}</p>
                                        <button
                                            className={style.qtyBtn}
                                            onClick={() => changeQty(item.game._id, item.quantity + 1)}
                                        >
                                            +
                                        </button>
                                    </div>

                                    <div className={style.right}>
                                        <p className={style.lineTotal}>
                                            ${item.lineTotal.toFixed(2)}
                                        </p>
                                        <button
                                            className={style.removeBtn}
                                            onClick={() => removeItem(item.game._id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={style.summary}>
                            <p className={style.summaryTitle}>Summary</p>
                            <div className={style.summaryLine}>
                                <span>Items</span>
                                <span>{cart.totalItems}</span>
                            </div>
                            <div className={style.summaryLine}>
                                <span>Subtotal</span>
                                <span>${cart.subtotal.toFixed(2)}</span>
                            </div>

                            <div className={style.summaryDivider}></div>

                            <button className={style.checkoutBtn}>
                                Checkout (coming soon)
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className={style.empty}>
                        <p>Your cart is empty.</p>
                        <Link to="../browse" className={style.browseBtn}>
                            Browse games
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
