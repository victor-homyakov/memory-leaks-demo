import { Link } from "react-router-dom";
import { ModalLeakDemo } from "../demos/modalLeak.tsx";

const CHROME_MEMORY_GUIDE = "https://developer.chrome.com/docs/devtools/memory-problems/";

export default function Demo31() {
    return (
        <main style={{ padding: "1rem 1.5rem", maxWidth: "42rem" }}>
            <p>
                <Link to="/">← Home</Link>
            </p>
            <h1>Demo 3.1: Modal leak</h1>
            <ModalLeakDemo />
            <p>
                Open and close the modal repeatedly. Each mount registers global listeners; the ref callback never
                releases the last DOM node when the instance unmounts.
            </p>
            <p>
                <code>LeakyModalContent</code> is a class component so instances are easy to find (e.g.{" "}
                <code>queryObjects(LeakyModalContent)</code> in the console when exposed on <code>window</code>).
            </p>
            <p>
                <strong>Try:</strong>
            </p>
            <ul>
                <li>
                    <code>queryObjects(LeakyModalContent)</code> before / after several open-close cycles
                </li>
                <li>
                    <code>queryObjects(HTMLDivElement)</code>
                </li>
                <li>Performance monitor — JS event listeners, DOM nodes</li>
                <li>Memory → Detached elements</li>
                <li>
                    Memory → Heap snapshot → filter «Detached» → find <code>Detached HTMLDivElement</code>.
                </li>
                <li>Memory → Three-snapshot technique</li>
            </ul>
            <p>
                <a href={CHROME_MEMORY_GUIDE}>{CHROME_MEMORY_GUIDE}</a>
            </p>
        </main>
    );
}
