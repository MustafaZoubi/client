import AdminSidebar from "../../components/admin/AdminSidebar";
import { Outlet } from "react-router";
import style from "../../styles/admin/adminLayout.module.css";

export default function AdminLayout() {
    return (
        <div className={style.container}>
            <AdminSidebar />
            <div className={style.content}>
                <Outlet />
            </div>
        </div>
    );
}
