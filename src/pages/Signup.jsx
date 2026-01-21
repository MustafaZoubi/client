import React, { useContext, useState } from 'react'
import style from "../styles/signup.module.css"
import backVideo from "../assets/images/backVideoLogin.mp4"
import logo from "../assets/images/BerserkLogo.png"
import { Link, useNavigate } from 'react-router'
import backPic from "../assets/images/backPic.jpg"
import { signupApi } from "../api/authApi"
import { AuthContext } from "../context/AuthContext"

export default function Signup() {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const handleSignup = async () => {
        if (password !== confirm) return alert("Passwords do not match");

        try {
            const data = await signupApi({ username, email, password });
            login(data);
            navigate("/");
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className={style.mainContainer}>
            <video className={style.backVideo} src={backVideo} autoPlay loop muted poster={backPic} />

            <div className={style.loginContainer}>
                <img className={style.logo} src={logo} />

                <div className={style.innerContainer}>
                    <input className={style.field} placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    <input className={style.field} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input className={style.field} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <input className={style.field} type="password" placeholder="Confirm Password" onChange={(e) => setConfirm(e.target.value)} />

                    <button className={style.registerBtn} onClick={handleSignup}>
                        Create Account
                    </button>

                    <p className={style.account}>
                        Already have an account? <Link to="../login">Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
