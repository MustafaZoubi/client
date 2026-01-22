import React, { useContext, useState } from 'react';
import style from "../styles/signup.module.css";
import backVideo from "../assets/images/backVideoLogin.mp4";
import logo from "../assets/images/BerserkLogo.png";
import { Link, useNavigate } from 'react-router';
import backPic from "../assets/images/backPic.jpg";
import { signupApi } from "../api/authApi";
import { AuthContext } from "../context/AuthContext";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

export default function Signup() {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const handleSignup = async () => {

        if (!username.trim() || username.length < 3) {
            return alert("Username must be at least 3 characters");
        }

        if (!emailRegex.test(email)) {
            return alert("Please enter a valid email address");
        }

        if (!passwordRegex.test(password)) {
            return alert(
                "Password must contain:\n" +
                "- at least 8 characters\n" +
                "- one uppercase letter\n" +
                "- one lowercase letter\n" +
                "- one number"
            );
        }

        if (password !== confirm) {
            return alert("Passwords do not match");
        }

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
            <video
                className={style.backVideo}
                src={backVideo}
                autoPlay
                loop
                muted
                poster={backPic}
            />

            <div className={style.loginContainer}>
                <img className={style.logo} src={logo} alt="logo" />

                <div className={style.innerContainer}>

                    <input
                        className={style.field}
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        className={style.field}
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        className={style.field}
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <input
                        className={style.field}
                        type="password"
                        placeholder="Confirm Password"
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                    />

                    <button
                        className={style.registerBtn}
                        onClick={handleSignup}
                    >
                        Create Account
                    </button>

                    <p className={style.account}>
                        Already have an account?{" "}
                        <Link to="../login">Sign in</Link>
                    </p>

                </div>
            </div>
        </div>
    );
}
