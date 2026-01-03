import React from 'react'
import backVideo from "../assets/images/backVideoLogin.mp4"
import logo from "../assets/images/BerserkLogo.png"
import style from "../styles/login.module.css"
import { Link } from 'react-router'
export default function Login() {
    return (

        <div className={style.mainContainer}>
            <video
                className={style.backVideo}
                src={backVideo}
                autoPlay
                loop
                muted>
            </video>
            <div className={style.loginContainer}>
                <img className={style.logo} src={logo} />
                <div className={style.innerContainer}>
                    <div className={style.emailContainer}>
                        <label htmlFor='email'>Email Address</label>
                        <input id='email' className={style.field} type="email" placeholder='you@example.com' />
                    </div>
                    <div className={style.passContainer}>
                        <label htmlFor='password'>Password</label>
                        <input id='password' className={style.field} type="password" placeholder='Enter your password' />
                    </div>
                    <div className={style.tools}>
                        <div className={style.remember}>
                            <input id='checkbox' type='checkbox' />
                            <label htmlFor='checkbox'>Remember me</label>
                        </div>

                        <Link target='_blank' to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> <p className={style.forgotPass}>Forgot password?</p></Link>
                    </div>
                    <button className={style.loginBtn}>Sign In</button>
                    <div className={style.accountDetails}>
                        <p className={style.demo}>Demo Credentials</p>
                        <p className={style.details}>
                            <p className={style.pFirstchild}>User:</p>
                            <p>user@arcadia.com</p>
                        </p>
                        <p className={style.details}>
                            <p className={style.pFirstchild}>Admin:</p>
                            <p>admin@arcadia.com</p>
                        </p>
                        <p className={style.details}>
                            <p className={style.pFirstchild}>Password:</p>
                            <p>Any password</p>
                        </p>
                    </div>

                    <p className={style.account}>Don't have an account? <Link to="../signup">Sign up for free</Link></p>
                </div>
            </div>
        </div>
    )
}
