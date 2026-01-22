import { useEffect, useState } from "react";
import style from "../../styles/admin/adminTable.module.css";

export default function AdminUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("/api/admin/users", { credentials: "include" })
            .then(r => r.json())
            .then(setUsers);
    }, []);

    const toggleRole = async (id) => {
        await fetch(`/api/admin/users/${id}/role`, { method: "PATCH", credentials: "include" });
        setUsers(u =>
            u.map(x =>
                x._id === id ? { ...x, role: x.role === "admin" ? "user" : "admin" } : x
            )
        );
    };

    const remove = async (id) => {
        await fetch(`/api/admin/users/${id}`, { method: "DELETE", credentials: "include" });
        setUsers(u => u.filter(x => x._id !== id));
    };

    return (
        <div>
            <h1 className={style.title}>Users</h1>

            <table className={style.table}>
                <thead>
                    <tr>
                        <th>Username</th><th>Email</th><th>Role</th><th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(u => (
                        <tr key={u._id}>
                            <td>{u.username}</td>
                            <td>{u.email}</td>
                            <td>{u.role}</td>
                            <td>
                                <button onClick={() => toggleRole(u._id)}>Toggle Role</button>
                                <button className={style.danger} onClick={() => remove(u._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
