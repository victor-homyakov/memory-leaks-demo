import { Link } from "react-router-dom";

export default function Home() {
    return (
        <main style={{ padding: "1rem 1.5rem", maxWidth: "42rem" }}>
            <h1>Memory leaks demo</h1>
            <ul>
                <li>
                    <Link to="/demo-1-1">Demo 1.1 — Detached elements</Link>
                </li>
                <li>
                    <Link to="/demo-1-2">Demo 1.2 — JS leak + allocation timeline</Link>
                </li>
                <li>
                    <Link to="/demo-1-3">Demo 1.3 — Less obvious JS leak</Link>
                </li>
                <li>
                    <Link to="/demo-1-4">Demo 1.4 — @boundMethod + debounce</Link>
                </li>
            </ul>
        </main>
    );
}
