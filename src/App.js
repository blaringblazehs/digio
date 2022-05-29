import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Page2 from "./Components/Pages/Page2";
import Page3 from "./Components/Pages/Page3";
import First from "./Components/First";
import Second from "./Components/Second";
import Third from "./Components/Third";
import ROne from "./Components/ROne";
import RTwo from "./Components/RTwo";
import Fourth from "./Components/Fourth";
function App() {
    return (
        <div className="App">
            <div className="nav-app">
                <Navbar />
            </div>

            <Routes>
                <Route path="/" element={<Page2 />} />
                <Route path="/home" element={<Home />} />
                <Route path="/page3" element={<Page3 />}>
                    <Route path="first" element={<First />}>
                        <Route path="r-one/:id" element={<ROne />} />
                        <Route path="r-two/:id" element={<RTwo />} />
                    </Route>
                    <Route path="second" element={<Second />} />
                    <Route path="third" element={<Third />} />
                    <Route path="fourth" element={<Fourth />} />
                </Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
