import { BrowserRouter, Route, Routes } from "react-router-dom";
import Demo11Detached from "./pages/Demo11Detached.tsx";
import Demo12 from "./pages/Demo12.tsx";
import Home from "./pages/Home.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/demo-1-1" element={<Demo11Detached />} />
                <Route path="/demo-1-2" element={<Demo12 mode="timeline" />} />
                <Route path="/demo-1-3" element={<Demo12 mode="subtle" />} />
            </Routes>
        </BrowserRouter>
    );
}
