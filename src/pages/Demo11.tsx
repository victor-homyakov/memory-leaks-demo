import { Link } from "react-router-dom";
import { leakDetachedNodes } from "../demos/detachedElementsLeak.ts";

export default function Demo11() {
    return (
        <main style={{ padding: "1rem 1.5rem", maxWidth: "42rem" }}>
            <p>
                <Link to="/">← Home</Link>
            </p>
            <h1>Demo 1.1: Detached elements</h1>
            <p>
                <button type="button" onClick={leakDetachedNodes}>
                    Make detached nodes
                </button>
            </p>
            <p>
                Each click builds a <code>ul</code> with five <code>li</code> nodes, never attaches them to the
                document, and keeps references in a module-level array.
            </p>
            <p>
                <strong>Try:</strong>
            </p>
            <ul>
                <li>Performance monitor</li>
                <li>
                    <code>queryObjects(Object)</code>
                    <br />
                    <code>queryObjects(Function)</code>
                    <br />
                    <code>queryObjects(HTMLElement)</code>
                </li>
                <li>Detached elements</li>
            </ul>
        </main>
    );
}
