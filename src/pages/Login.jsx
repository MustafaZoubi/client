import React, { useContext, useState } from "react";
import backVideo from "../assets/images/backVideoLogin.mp4";
import logo from "../assets/images/BerserkLogo.png";
import style from "../styles/login.module.css";
import { Link, useNavigate } from "react-router";
import backPic from "../assets/images/backPic.jpg";
import { loginApi } from "../api/authApi";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const data = await loginApi({ email, password });

            login(data);

            if (data.user.role === "admin") {
                navigate("/admin/users");
            } else {
                navigate("/");
            }
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
                preload="auto"
                poster={backPic}
            />

            <div className={style.loginContainer}>
                <img className={style.logo} src={logo} />

                <div className={style.innerContainer}>
                    <div className={style.emailContainer}>
                        <label>Email Address</label>
                        <input
                            className={style.field}
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className={style.passContainer}>
                        <label>Password</label>
                        <input
                            className={style.field}
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button className={style.loginBtn} onClick={handleLogin}>
                        Sign In
                    </button>

                    <p className={style.account}>
                        Don't have an account?{" "}
                        <Link to="../signup">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
