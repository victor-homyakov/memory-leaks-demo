import { BrowserRouter, Route, Routes } from "react-router-dom";
import Demo11Detached from "./pages/Demo11Detached.tsx";
import Demo12 from "./pages/Demo12.tsx";
import Demo14 from "./pages/Demo14.tsx";
import Demo31 from "./pages/Demo31.tsx";
import Demo32 from "./pages/Demo32.tsx";
import Demo33 from "./pages/Demo33.tsx";
import Home from "./pages/Home.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/demo-1-1" element={<Demo11Detached />} />
                <Route path="/demo-1-2" element={<Demo12 mode="timeline" />} />
                <Route path="/demo-1-3" element={<Demo12 mode="subtle" />} />
                <Route path="/demo-1-4" element={<Demo14 />} />
                <Route path="/demo-3-1" element={<Demo31 />} />
                <Route path="/demo-3-2" element={<Demo32 />} />
                <Route path="/demo-3-3" element={<Demo33 />} />
            </Routes>
        </BrowserRouter>
    );
}
