import { useEffect, useState } from "react";
import style from "../../styles/admin/adminForm.module.css";
import table from "../../styles/admin/adminTable.module.css";

export default function AdminGames() {
    const [games, setGames] = useState([]);
    const [form, setForm] = useState({ title: "", price: "", rawgId: "" });

    const load = () =>
        fetch("/api/admin/games", { credentials: "include" })
            .then(r => r.json())
            .then(setGames);

    useEffect(load, []);

    const submit = async () => {
        await fetch("/api/admin/games", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });
        setForm({ title: "", price: "", rawgId: "" });
        load();
    };

    const remove = async (id) => {
        await fetch(`/api/admin/games/${id}`, {
            method: "DELETE",
            credentials: "include",
        });
        load();
    };

    return (
        <div>
            <h1 className={table.title}>Games</h1>

            <div className={style.form}>
                <input placeholder="Title" value={form.title}
                    onChange={e => setForm({ ...form, title: e.target.value })} />
                <input placeholder="Price" value={form.price}
                    onChange={e => setForm({ ...form, price: e.target.value })} />
                <input placeholder="RAWG ID" value={form.rawgId}
                    onChange={e => setForm({ ...form, rawgId: e.target.value })} />
                <button onClick={submit}>Add Game</button>
            </div>

            <table className={table.table}>
                <thead>
                    <tr><th>Title</th><th>Price</th><th>Actions</th></tr>
                </thead>
                <tbody>
                    {games.map(g => (
                        <tr key={g._id}>
                            <td>{g.title}</td>
                            <td>${g.price}</td>
                            <td>
                                <button className={table.danger} onClick={() => remove(g._id)}>
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
