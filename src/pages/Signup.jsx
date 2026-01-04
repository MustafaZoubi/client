import React from 'react'
import style from "../styles/signup.module.css"
import backVideo from "../assets/images/backVideoLogin.mp4"
import logo from "../assets/images/BerserkLogo.png"
import { Link } from 'react-router'
import backPic from "../assets/images/backPic.jpg"

export default function Signup() {
    return (
        <div className={style.mainContainer}>
            <video
                className={style.backVideo}
                src={backVideo}
                autoPlay
                loop
                muted
                preload="auto"
                poster={backPic}
            >
            </video>
            <div className={style.loginContainer}>
                <img className={style.logo} src={logo} />
                <div className={style.innerContainer}>
                    <div className={style.usernameContainer}>
                        <label htmlFor='username'>Username</label>
                        <input id='username' className={style.field} type="text" placeholder='Choose a username' />
                    </div>
                    <div className={style.emailContainer}>
                        <label htmlFor='email'>Email Address</label>
                        <input id='email' className={style.field} type="email" placeholder='you@example.com' />
                    </div>
                    <div className={style.passContainer}>
                        <label htmlFor='password'>Password</label>
                        <input id='password' className={style.field} type="password" placeholder='Enter your password' />
                    </div>
                    <div className={style.passContainer}>
                        <label htmlFor='confirmPass'>Confirm Password</label>
                        <input id='confirmPass' className={style.field} type="password" placeholder='Re-enter your password' />
                    </div>
                    <div className={style.terms}>
                        <input id="checkbox" type='checkbox' />
                        <label className={style.termsWriting} htmlFor='checkbox'>I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span></label>
                    </div>
                    <button className={style.registerBtn}>Create Account</button>

                    <p className={style.account}>Already have an account? <Link to="../login">Sign in</Link></p>
                </div>
            </div>
        </div>
    )
}
