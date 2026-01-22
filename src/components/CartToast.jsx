import React, { useEffect } from "react";
import style from "../styles/componentsStyle/cartToast.module.css";
import { IoCartOutline } from "react-icons/io5";

export default function CartToast({ show, onClose }) {
    useEffect(() => {
        if (!show) return;

        const timer = setTimeout(() => {
            onClose();
        }, 2200);

        return () => clearTimeout(timer);
    }, [show, onClose]);

    if (!show) return null;

    return (
        <div className={style.toast}>
            <IoCartOutline className={style.icon} />
            <span>Added to cart successfully</span>
        </div>
    );
}
