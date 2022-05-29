import stamp1 from "./images/stamp1.jpeg";
import stamp2 from "./images/stamp2.png";
import stamp3 from "./images/stamp3.png";
import stamp4 from "./images/stamp4.jpeg";
import digimg from "./images/digio.webp";
import adh from "./images/adh.png";
import sign from "./images/sign.jpeg";

import "./page3CSS/first.css";
const Fourth = () => {
    return (
        <div className="first-container">
            <div style={{ marginTop: "20px" }} className="first-title">
                <p>Stamp Library</p>
            </div>
            <div style={{ marginTop: "20px" }} className="first-img-grid">
                <div className="first-left">
                    <img src={stamp2} />
                </div>
                <div className="first-right">
                    <img src={stamp4} />
                </div>
            </div>
            <div style={{ marginTop: "20px" }} className="first-title">
                <p>Image Library</p>
            </div>
            <div style={{ marginTop: "20px" }} className="first-img-grid">
                <div className="first-left">
                    <img src={sign} />
                </div>
                <div className="first-right">
                    <img src={stamp4} />
                </div>
            </div>
            <div style={{ marginTop: "20px" }} className="first-img-grid">
                <div className="first-left">
                    <img src={digimg} />
                </div>
                <div className="first-right">
                    <img src={adh} />
                </div>
            </div>
        </div>
    );
};
export default Fourth;
