import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import formStyle from "../../styles/admin/adminForm.module.css";
import table from "../../styles/admin/adminTable.module.css";

const ADMIN_API = "http://localhost:5000/api/admin";

export default function AdminUsers() {
    const { auth } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [editing, setEditing] = useState(null);

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        role: "user",
    });

    const load = async () => {
        const res = await fetch(`${ADMIN_API}/users`, {
            headers: { Authorization: `Bearer ${auth.token}` },
        });
        const data = await res.json();
        setUsers(Array.isArray(data) ? data : []);
    };

    useEffect(() => {
        if (auth?.token) load();
    }, [auth]);

    const submit = async () => {
        const method = editing ? "PUT" : "POST";
        const url = editing
            ? `${ADMIN_API}/users/${editing}`
            : `${ADMIN_API}/users`;

        await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${auth.token}`,
            },
            body: JSON.stringify(form),
        });

        setForm({ username: "", email: "", password: "", role: "user" });
        setEditing(null);
        load();
    };

    const edit = (u) => {
        setEditing(u._id);
        setForm({
            username: u.username,
            email: u.email,
            password: "",
            role: u.role,
        });
    };

    const remove = async (id) => {
        await fetch(`${ADMIN_API}/users/${id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${auth.token}` },
        });
        load();
    };

    return (
        <div>
            <h1 className={table.title}>Users</h1>

            <div className={formStyle.form}>
                <input
                    placeholder="Username"
                    value={form.username}
                    onChange={e =>
                        setForm({ ...form, username: e.target.value })
                    }
                />

                <input
                    placeholder="Email"
                    value={form.email}
                    onChange={e =>
                        setForm({ ...form, email: e.target.value })
                    }
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={e =>
                        setForm({ ...form, password: e.target.value })
                    }
                />

                <select
                    value={form.role}
                    onChange={e =>
                        setForm({ ...form, role: e.target.value })
                    }
                >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>

                <button onClick={submit}>
                    {editing ? "Update User" : "Add User"}
                </button>
            </div>

            {/* ✅ SCROLLABLE TABLE */}
            <div className={table.tableWrapper}>
                <table className={table.table}>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map(u => (
                            <tr key={u._id}>
                                <td>{u.username}</td>
                                <td>{u.email}</td>
                                <td>{u.role}</td>
                                <td>
                                    <button onClick={() => edit(u)}>Edit</button>
                                    <button
                                        className={table.danger}
                                        onClick={() => remove(u._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
