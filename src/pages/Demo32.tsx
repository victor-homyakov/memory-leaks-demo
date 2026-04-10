import { useState } from "react";
import { Link } from "react-router-dom";

const CHROME_MEMORY_GUIDE = "https://developer.chrome.com/docs/devtools/memory-problems/";

const BATCH_SIZE = 5;

type Row = { id: string; attrName: string };

export default function Demo32() {
    const [generation, setGeneration] = useState(0);
    const [rows, setRows] = useState<Row[]>([]);

    const handleClick = () => {
        const nextGen = generation + 1;
        setGeneration(nextGen);
        setRows(
            Array.from({ length: BATCH_SIZE }, () => ({
                id: crypto.randomUUID(),
                attrName: `data-leak-${Math.random().toString(36).slice(2, 14)}`,
            })),
        );
    };

    return (
        <main style={{ padding: "1rem 1.5rem", maxWidth: "42rem" }}>
            <p>
                <Link to="/">← Home</Link>
            </p>
            <h1>Demo 3.2: data-* attributes</h1>
            <p>
                <button type="button" onClick={handleClick}>
                    Replace batch ({BATCH_SIZE} divs, new data-* names)
                </button>{" "}
                <span style={{ color: "#64748b", fontSize: "0.9em" }}>
                    Generation: {generation} {generation === 0 ? "(nothing mounted yet)" : ""}
                </span>
            </p>
            <p>
                Each click unmounts the previous batch and mounts {BATCH_SIZE} fresh <code>div</code>s. Each div gets a
                new random <code>data-…</code> attribute name. Old nodes go away; unique attribute name strings still
                pile up in the JS heap.
            </p>
            <div hidden aria-hidden>
                {rows.map((row) => (
                    <div key={row.id} {...{ [row.attrName]: "" }} />
                ))}
            </div>
            <p>
                <strong>Try:</strong>
                <ul>
                    <li>Memory → Allocations on timeline</li>
                    <li>Memory → Three-snapshot technique</li>
                </ul>
            </p>
            <p>
                <a href={CHROME_MEMORY_GUIDE}>{CHROME_MEMORY_GUIDE}</a>
            </p>
        </main>
    );
}
