import { Link } from "react-router-dom";
import { leakJs, leakJs2 } from "../demos/jsHeapLeak.ts";

const CHROME_MEMORY_GUIDE = "https://developer.chrome.com/docs/devtools/memory-problems/";
const CHROME_ALLOCATION_TIMELINE = "https://developer.chrome.com/docs/devtools/memory-problems/allocation-profiler/";

type Demo12Mode = "timeline" | "subtle";

type Demo12Props = {
    mode: Demo12Mode;
};

export default function Demo12({ mode }: Demo12Props) {
    const isTimeline = mode === "timeline";

    return (
        <main style={{ padding: "1rem 1.5rem", maxWidth: "42rem" }}>
            <p>
                <Link to="/">← Home</Link>
            </p>
            <h1>{isTimeline ? "Demo 1.2: JS leak + allocation timeline" : "Demo 1.3: Less obvious JS leak"}</h1>
            {isTimeline ? (
                <>
                    <p>
                        <button type="button" onClick={leakJs}>
                            Make JavaScript leak
                        </button>
                    </p>
                    <p>
                        Large strings are pushed to a module-level array. Uses <code>indexOf</code> on the string so V8
                        materializes a different string representation (cons vs seq), which shows up clearly on the
                        allocation timeline.
                    </p>
                    <p>
                        <strong>Try:</strong>
                    </p>
                    <ul>
                        <li> Performance monitor</li>
                        <li>
                            <code>queryObjects(Object)</code> / <code>queryObjects(Function)</code>
                        </li>
                        <li>
                            Memory → <strong>Allocations on timeline</strong> (
                            <a href={CHROME_ALLOCATION_TIMELINE}>guide</a>)
                        </li>
                    </ul>
                </>
            ) : (
                <>
                    <p>
                        <button type="button" onClick={leakJs2}>
                            Make less obvious JavaScript leak
                        </button>
                    </p>
                    <p>
                        Same retained <code>data</code> array as demo 1.2, but without the extra string operation — heap
                        still grows; pattern can look subtler when you compare profiles.
                    </p>
                    <p>
                        <strong>Try:</strong> same tools as 1.2; compare allocation shapes with demo 1.2.
                    </p>
                </>
            )}
            <p>
                <a href={CHROME_MEMORY_GUIDE}>{CHROME_MEMORY_GUIDE}</a>
            </p>
        </main>
    );
}
