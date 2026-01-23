// pages/admin/AdminAchievements.jsx
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import formStyle from "../../styles/admin/adminForm.module.css";
import table from "../../styles/admin/adminTable.module.css";

const ADMIN_API = `${import.meta.env.VITE_SERVER_URL}/api/admin`;

export default function AdminAchievements() {
    const { auth } = useContext(AuthContext);

    const [achievements, setAchievements] = useState([]);
    const [games, setGames] = useState([]);
    const [editingId, setEditingId] = useState(null);

    const [form, setForm] = useState({
        title: "",
        description: "",
        game: "",
    });

    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
    };

    const load = async () => {
        const a = await fetch(`${ADMIN_API}/achievements`, { headers }).then(r => r.json());
        const g = await fetch(`${ADMIN_API}/games`, { headers }).then(r => r.json());
        setAchievements(Array.isArray(a) ? a : []);
        setGames(Array.isArray(g) ? g : []);
    };

    useEffect(() => {
        if (auth?.token) load();
    }, [auth]);

    const submit = async () => {
        const url = editingId
            ? `${ADMIN_API}/achievements/${editingId}`
            : `${ADMIN_API}/achievements`;

        await fetch(url, {
            method: editingId ? "PUT" : "POST",
            headers,
            body: JSON.stringify(form),
        });

        setForm({ title: "", description: "", game: "" });
        setEditingId(null);
        load();
    };

    const edit = (a) => {
        setEditingId(a._id);
        setForm({
            title: a.title,
            description: a.description,
            game: a.game?._id,
        });
    };

    const remove = async (id) => {
        await fetch(`${ADMIN_API}/achievements/${id}`, {
            method: "DELETE",
            headers,
        });
        load();
    };

    return (
        <div>
            <h1 className={table.title}>Achievements</h1>

            <div className={formStyle.form}>
                <input
                    placeholder="Title"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                />

                <textarea
                    placeholder="Description"
                    value={form.description}
                    onChange={(e) =>
                        setForm({ ...form, description: e.target.value })
                    }
                />

                <select
                    value={form.game}
                    onChange={(e) => setForm({ ...form, game: e.target.value })}
                >
                    <option value="">Select Game</option>
                    {games.map((g) => (
                        <option key={g._id} value={g._id}>
                            {g.title}
                        </option>
                    ))}
                </select>

                <button onClick={submit}>
                    {editingId ? "Update Achievement" : "Add Achievement"}
                </button>
            </div>

            <div className={table.tableWrapper}>
                <table className={table.table}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Game</th>
                            <th>Unlocked</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {achievements.map((a) => (
                            <tr key={a._id}>
                                <td>{a.title}</td>
                                <td>{a.game?.title}</td>
                                <td>100%</td>
                                <td>
                                    <button onClick={() => edit(a)}>Edit</button>
                                    <button
                                        className={table.danger}
                                        onClick={() => remove(a._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {!achievements.length && (
                            <tr>
                                <td colSpan="4">No achievements found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
