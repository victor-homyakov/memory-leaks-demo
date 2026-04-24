import { Link } from "react-router-dom";
import { MemoStableModalDemo } from "../demos/memoStableModal.tsx";

export default function Demo23() {
    return (
        <main style={{ padding: "1rem 1.5rem", maxWidth: "42rem" }}>
            <p>
                <Link to="/">← Home</Link>
            </p>
            <h1>Demo 2.3: useMemo/selectors</h1>
            <MemoStableModalDemo />
            <p>
                Uses <code>useMemo</code> and a tiny reselect-style cache. First open allocates; reopening the modal
                should not grow the heap from this path alone.
            </p>
            <p>
                Heavy derived data is memoized and shared across modal opens. Contrast with 2.1 when you take heap
                snapshots or allocation timelines: stable pattern after the first allocation.
            </p>
            <p>
                <strong>Try:</strong>
            </p>
            <ul>
                <li>Three-snapshot technique</li>
                <li>
                    <code>useMemo</code> and a reselect-style cached selector - not a leak
                </li>
            </ul>
        </main>
    );
}
