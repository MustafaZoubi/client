import { useEffect, useState } from "react";
import formStyle from "../../styles/admin/adminForm.module.css";
import table from "../../styles/admin/adminTable.module.css";

export default function AdminAchievements() {
    const [achievements, setAchievements] = useState([]);
    const [games, setGames] = useState([]);
    const [form, setForm] = useState({
        title: "",
        description: "",
        game: "",
    });

    const load = async () => {
        const a = await fetch("/api/admin/achievements", { credentials: "include" }).then(r => r.json());
        const g = await fetch("/api/admin/games", { credentials: "include" }).then(r => r.json());
        setAchievements(a);
        setGames(g);
    };

    useEffect(load, []);

    const submit = async () => {
        await fetch("/api/admin/achievements", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });
        setForm({ title: "", description: "", game: "" });
        load();
    };

    const remove = async (id) => {
        await fetch(`/api/admin/achievements/${id}`, {
            method: "DELETE",
            credentials: "include",
        });
        load();
    };

    return (
        <div>
            <h1 className={table.title}>Achievements</h1>

            <div className={formStyle.form}>
                <input placeholder="Title" value={form.title}
                    onChange={e => setForm({ ...form, title: e.target.value })} />
                <input placeholder="Description" value={form.description}
                    onChange={e => setForm({ ...form, description: e.target.value })} />
                <select value={form.game}
                    onChange={e => setForm({ ...form, game: e.target.value })}>
                    <option value="">Select Game</option>
                    {games.map(g => <option key={g._id} value={g._id}>{g.title}</option>)}
                </select>
                <button onClick={submit}>Add Achievement</button>
            </div>

            <table className={table.table}>
                <thead>
                    <tr><th>Title</th><th>Game</th><th>Unlocked</th><th></th></tr>
                </thead>
                <tbody>
                    {achievements.map(a => (
                        <tr key={a._id}>
                            <td>{a.title}</td>
                            <td>{a.game?.title}</td>
                            <td>100%</td>
                            <td>
                                <button className={table.danger} onClick={() => remove(a._id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
