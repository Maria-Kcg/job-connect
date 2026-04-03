import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Jobs from "./pages/Jobs";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Error from "./pages/Error";

function Routeur() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="*" element={<Error />} />
            </Route>
        </Routes>
    )
}

export default Routeur;