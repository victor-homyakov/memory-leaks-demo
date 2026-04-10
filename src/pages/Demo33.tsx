import { Link } from "react-router-dom";
import { MemoStableModalDemo } from "../demos/memoStableModal.tsx";

const CHROME_MEMORY_GUIDE = "https://developer.chrome.com/docs/devtools/memory-problems/";

export default function Demo33() {
    return (
        <main style={{ padding: "1rem 1.5rem", maxWidth: "42rem" }}>
            <p>
                <Link to="/">← Home</Link>
            </p>
            <h1>Demo 3.3: useMemo/selectors</h1>
            <MemoStableModalDemo />
            <p>
                Uses <code>useMemo</code> and a tiny reselect-style cache. First open allocates; reopening the modal
                should not grow the heap from this path alone.
            </p>
            <p>
                Heavy derived data is memoized and shared across modal opens. Contrast with 3.1 when you take heap
                snapshots or allocation timelines: stable pattern after the first allocation.
            </p>
            <p>
                <strong>Try:</strong>
            </p>
            <ul>
                <li>Memory → Three-snapshot technique</li>
                <li>Memory → Allocations on timeline</li>
            </ul>
            <p>
                <a href={CHROME_MEMORY_GUIDE}>{CHROME_MEMORY_GUIDE}</a>
            </p>
        </main>
    );
}
