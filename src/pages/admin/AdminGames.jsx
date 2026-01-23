import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import formStyle from "../../styles/admin/adminForm.module.css";
import table from "../../styles/admin/adminTable.module.css";

const ADMIN_API = `${import.meta.env.VITE_SERVER_URL}/api/admin`;

export default function AdminGames() {
    const { auth } = useContext(AuthContext);
    const [games, setGames] = useState([]);
    const [editing, setEditing] = useState(null);

    const emptyForm = {
        title: "",
        price: "",
        rawgId: "",
        genres: "",
        releaseDate: "",
        publisher: "",
        description: "",
        platforms: {
            pc: false,
            playstation: false,
            xbox: false,
            switch: false,
        },
        systemRequirements: {
            minimum: { os: "", cpu: "", ram: "", gpu: "", storage: "" },
            recommended: { os: "", cpu: "", ram: "", gpu: "", storage: "" },
        },
    };

    const [form, setForm] = useState(emptyForm);

    const load = async () => {
        const res = await fetch(`${ADMIN_API}/games`, {
            headers: { Authorization: `Bearer ${auth.token}` },
        });
        const data = await res.json();
        setGames(Array.isArray(data) ? data : []);
    };

    useEffect(() => {
        if (auth?.token) load();
    }, [auth]);

    const submit = async () => {
        const method = editing ? "PUT" : "POST";
        const url = editing
            ? `${ADMIN_API}/games/${editing}`
            : `${ADMIN_API}/games`;

        const payload = {
            ...form,
            price: Number(form.price),
            rawgId: Number(form.rawgId),
            genres: form.genres.split(",").map(g => g.trim()),
        };

        await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${auth.token}`,
            },
            body: JSON.stringify(payload),
        });

        setForm(emptyForm);
        setEditing(null);
        load();
    };

    const edit = (g) => {
        setEditing(g._id);
        setForm({
            ...g,
            genres: g.genres.join(", "),
        });
    };

    const remove = async (id) => {
        await fetch(`${ADMIN_API}/games/${id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${auth.token}` },
        });
        load();
    };

    return (
        <div>
            <h1 className={table.title}>Games</h1>

            <div className={formStyle.form}>
                <input placeholder="Title"
                    value={form.title}
                    onChange={e => setForm({ ...form, title: e.target.value })} />

                <input placeholder="Price"
                    value={form.price}
                    onChange={e => setForm({ ...form, price: e.target.value })} />

                <input placeholder="RAWG ID"
                    value={form.rawgId}
                    onChange={e => setForm({ ...form, rawgId: e.target.value })} />

                <input placeholder="Genres (comma separated)"
                    value={form.genres}
                    onChange={e => setForm({ ...form, genres: e.target.value })} />

                <input placeholder="Release Date"
                    value={form.releaseDate}
                    onChange={e => setForm({ ...form, releaseDate: e.target.value })} />

                <input placeholder="Publisher"
                    value={form.publisher}
                    onChange={e => setForm({ ...form, publisher: e.target.value })} />

                <textarea placeholder="Description"
                    value={form.description}
                    onChange={e => setForm({ ...form, description: e.target.value })} />

                {/* PLATFORMS */}
                <div className={formStyle.platformBox}>
                    <h4>Platforms</h4>

                    <div className={formStyle.platformList}>
                        {["pc", "playstation", "xbox", "switch"].map(p => (
                            <label key={p} className={formStyle.platformItem}>
                                <input
                                    type="checkbox"
                                    checked={form.platforms[p]}
                                    onChange={e =>
                                        setForm({
                                            ...form,
                                            platforms: {
                                                ...form.platforms,
                                                [p]: e.target.checked,
                                            },
                                        })
                                    }
                                />
                                {p.toUpperCase()}
                            </label>
                        ))}
                    </div>
                </div>

                {/* SYSTEM REQUIREMENTS */}
                {["minimum", "recommended"].map(level => (
                    <div key={level}>
                        <strong>{level.toUpperCase()}</strong>
                        {["os", "cpu", "ram", "gpu", "storage"].map(field => (
                            <input
                                key={field}
                                placeholder={`${level} ${field}`}
                                value={form.systemRequirements[level][field]}
                                onChange={e =>
                                    setForm({
                                        ...form,
                                        systemRequirements: {
                                            ...form.systemRequirements,
                                            [level]: {
                                                ...form.systemRequirements[level],
                                                [field]: e.target.value,
                                            },
                                        },
                                    })
                                }
                            />
                        ))}
                    </div>
                ))}

                <button onClick={submit}>
                    {editing ? "Update Game" : "Add Game"}
                </button>
            </div>
            <div className={table.tableWrapper}>

                <table className={table.table}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {games.map(g => (
                            <tr key={g._id}>
                                <td>{g.title}</td>
                                <td>${g.price}</td>
                                <td>
                                    <button onClick={() => edit(g)}>Edit</button>
                                    <button className={table.danger}
                                        onClick={() => remove(g._id)}>
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
