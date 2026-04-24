import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Child } from "../demos/demo14/Child.ts";

export default function Demo14() {
    const [showTest, setShowTest] = useState(true);

    useEffect(() => {
        const id = window.setInterval(() => {
            setShowTest((v) => !v);
            const child = new Child();
            child.method();
        }, 1000);
        return () => window.clearInterval(id);
    }, []);

    return (
        <main style={{ padding: "1rem 1.5rem", maxWidth: "42rem" }}>
            <p>
                <Link to="/">← Home</Link>
            </p>
            <h1>Demo 1.4: @boundMethod + debounce</h1>
            <p aria-live="polite" style={{ fontSize: "1.5rem", minHeight: "1.5em" }}>
                {showTest ? "test" : "\u00a0"}
            </p>
            <p>
                Each tick toggles the word <strong>test</strong> and constructs a new <code>Child</code>, then calls{" "}
                <code>method()</code>. <code>Base</code> uses <code>@boundMethod</code> (autobind-decorator);{" "}
                <code>Child</code> wraps <code>super.method</code> in <code>lodash/debounce</code>. The issue is
                described in the <code>autobind-decorator</code> repository in{" "}
                <a href="https://github.com/andreypopp/autobind-decorator/issues/76#issuecomment-719563300">
                    autobind-decorator #76
                </a>
                .
            </p>
            <p>
                <strong>Try:</strong>
            </p>
            <ul>
                <li>Performance monitor (JS heap may look calmer)</li>
                <li>
                    <code>queryObjects(Function)</code>
                </li>
                <li>Memory — steady growth in JS heap</li>
                <li>Three-snapshot technique</li>
            </ul>
        </main>
    );
}
