import { NavLink } from "react-router";
import style from "../../styles/admin/adminSidebar.module.css";

export default function AdminSidebar() {
    return (
        <aside className={style.sidebar}>
            <h2 className={style.logo}>ADMIN</h2>

            <NavLink to="users" className={style.link}>
                Users
            </NavLink>

            <NavLink to="games" className={style.link}>
                Games
            </NavLink>

            <NavLink to="achievements" className={style.link}>
                Achievements
            </NavLink>

            <NavLink to="/" className={style.link}>
                Home
            </NavLink>
        </aside>
    );
}
