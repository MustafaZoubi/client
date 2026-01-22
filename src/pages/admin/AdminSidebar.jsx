import { NavLink } from "react-router";
import style from "../../styles/admin/adminSidebar.module.css";

export default function AdminSidebar() {
    return (
        <aside className={style.sidebar}>
            <h2 className={style.logo}>ADMIN</h2>

            <Link to="users">Users</Link>
            <Link to="games">Games</Link>
            <Link to="achievements">Achievements</Link>
        </aside>
    );
}
