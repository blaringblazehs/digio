import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Page2 from "./Components/Pages/Page2";
function App() {
    return (
        <div className="App">
            <div className="nav-app">
                <Navbar />
            </div>

            <Routes>
                <Route path="/" element={<Page2 />} />
                <Route path="/home" element={<Home />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
