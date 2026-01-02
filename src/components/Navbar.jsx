import React, { useState } from 'react'
import logoImage from "../assets/images/logo.png"
import style from "../styles/navbar.module.css"
import { Link } from "react-router"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [burgerMenu, setBurgerMenu] = useState(false);

    return (
        <div className={style.nav}>

            <Link to="/">
                <img className={style.logo} src={logoImage} alt='logo' />
            </Link>

            <div className={style.midSection}>
                <Link to="/"><div className={style.navItem}>Home</div></Link>
                <Link to="browser"><div className={style.navItem}>Browse</div></Link>
                <input
                    className={style.searchField}
                    type='text'
                    placeholder='Search games...'
                />
            </div>

            <div className={style.rightSection}>
                <span className={`material-symbols-outlined ${style.cartIcon}`}>
                    shopping_cart
                </span>

                <Link to="login">
                    <button className={style.loginBtn}>Login</button>
                </Link>

                <Link to="signup">
                    <button className={style.signupBtn}>Sign Up</button>
                </Link>

                <button onClick={() => setBurgerMenu(!burgerMenu)} className={style.burgerBtn}>
                    ☰
                </button>


            </div>
            <div className={`${style.burgerMenu} ${burgerMenu ? style.open : null}`}>
                <div className={style.navItem}>Home</div>
                <div className={style.navItem}>Browse</div>
                <Link to="login">
                    <button className={style.loginBtnMobile}>Login</button>
                </Link>

                <Link to="signup">
                    <button className={style.signupBtnMobile}>Sign Up</button>
                </Link>

                <input
                    className={style.searchField}
                    type='text'
                    placeholder='Search games...'
                />
            </div>
        </div>


    )
}

export default Navbar
