import React, { useContext, useState } from 'react'
import logoImage from "../assets/images/logo.png"
import style from "../styles/navbar.module.css"
import { Link } from "react-router"
import navVideo from "../assets/images/abstractRed.mp4"
import backPic from "../assets/images/abstractRedPic.jpg"
import { AuthContext } from "../context/AuthContext"

function Navbar({ backgroundOn = false }) {
    const [burgerMenu, setBurgerMenu] = useState(false);

    const { auth, logout } = useContext(AuthContext);

    return (
        <div className={style.nav}>
            {backgroundOn ? (
                <div className={style.overLay}>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        poster={backPic}
                        className={style.video}
                        src={navVideo}
                    />
                </div>
            ) : null}

            {/* LOGO */}
            <Link to="/">
                <img className={style.logo} src={logoImage} alt='logo' />
            </Link>

            {/* MIDDLE SECTION */}
            <div className={style.midSection}>
                <Link to="/"><div className={style.navItem}>Home</div></Link>
                <Link to="../browse"><div className={style.navItem}>Browse</div></Link>

                <input
                    className={style.searchField}
                    type='text'
                    placeholder='Search games...'
                />
            </div>

            {/* RIGHT SECTION (DESKTOP) */}
            <div className={style.rightSection}>
                <Link to="/cart">
                    <span className={`material-symbols-outlined ${style.cartIcon}`}>
                        shopping_cart
                    </span>
                </Link>

                {!auth.user ? (
                    <>
                        <Link to="../login">
                            <button className={style.loginBtn}>Login</button>
                        </Link>

                        <Link to="../signup">
                            <button className={style.signupBtn}>Sign Up</button>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to="/profile">
                            <button className={style.loginBtn}>
                                {auth.user.username}
                            </button>
                        </Link>

                        <button
                            onClick={logout}
                            className={style.signupBtn}
                        >
                            Logout
                        </button>
                    </>
                )}

                <button
                    onClick={() => setBurgerMenu(!burgerMenu)}
                    className={style.burgerBtn}
                >
                    ☰
                </button>
            </div>

            {/* BURGER MENU (MOBILE) */}
            <div className={`${style.burgerMenu} ${burgerMenu ? style.open : ""}`}>
                <Link to="/"><div className={style.navItem}>Home</div></Link>
                <Link to="../browse"><div className={style.navItem}>Browse</div></Link>

                {!auth.user ? (
                    <>
                        <Link to="../login">
                            <button className={style.loginBtnMobile}>Login</button>
                        </Link>

                        <Link to="../signup">
                            <button className={style.signupBtnMobile}>Sign Up</button>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to="/profile">
                            <button className={style.loginBtnMobile}>Profile</button>
                        </Link>

                        <button
                            onClick={logout}
                            className={style.signupBtnMobile}
                        >
                            Logout
                        </button>
                    </>
                )}

                <input
                    className={style.searchField}
                    type='text'
                    placeholder='Search games...'
                />
            </div>
        </div>
    );
}

export default Navbar;
