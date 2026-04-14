import { BrowserRouter, Route, Routes } from "react-router-dom";
import Demo11 from "./pages/Demo11.tsx";
import Demo12 from "./pages/Demo12.tsx";
import Demo14 from "./pages/Demo14.tsx";
import Demo21 from "./pages/Demo21.tsx";
import Demo22 from "./pages/Demo22.tsx";
import Demo23 from "./pages/Demo23.tsx";
import Home from "./pages/Home.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/demo-1-1" element={<Demo11 />} />
                <Route path="/demo-1-2" element={<Demo12 mode="timeline" />} />
                <Route path="/demo-1-3" element={<Demo12 mode="subtle" />} />
                <Route path="/demo-1-4" element={<Demo14 />} />
                <Route path="/demo-2-1" element={<Demo21 />} />
                <Route path="/demo-2-2" element={<Demo22 />} />
                <Route path="/demo-2-3" element={<Demo23 />} />
            </Routes>
        </BrowserRouter>
    );
}
