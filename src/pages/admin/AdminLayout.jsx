import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router";
import style from "../../styles/admin/adminLayout.module.css";
import Footer from "./Footer";

export default function AdminLayout() {
    return (
        <div className={style.container}>
            <AdminSidebar />

            <div className={style.content}>
                <Outlet />
                <Footer />
            </div>
        </div>
    );
}
