import { Link } from "react-router-dom";
import { ModalLeakDemo } from "../demos/modalLeak.tsx";

export default function Demo21() {
    return (
        <main style={{ padding: "1rem 1.5rem", maxWidth: "42rem" }}>
            <p>
                <Link to="/">← Home</Link>
            </p>
            <h1>Demo 2.1: Modal leak</h1>
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
                    <code>queryObjects(HTMLElement)</code>
                </li>
                <li>Allocations on timeline</li>
                <li>Three-snapshot technique</li>
                <li>React DevTools, Web Vitals and other extensions add noise - better in incognito mode</li>
            </ul>
        </main>
    );
}
