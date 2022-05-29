import stamp1 from "./images/stamp1.jpeg";
import stamp2 from "./images/stamp2.png";
import stamp3 from "./images/stamp3.png";
import stamp4 from "./images/stamp4.jpeg";

import "./page3CSS/first.css";
const First = () => {
    return (
        <div className="first-container">
            <div
                style={{ borderBottom: "2px solid grey" }}
                className="first-title"
            >
                <p>Stamp Library</p>
            </div>
            <div style={{ marginTop: "20px" }} className="first-img-grid">
                <div className="first-left">
                    <img src={stamp1} />
                </div>
                <div className="first-right">
                    <img src={stamp2} />
                </div>
                <div className="first-left">
                    <img src={stamp1} />
                </div>
                <div className="first-right">
                    <img src={stamp3} />
                </div>
            </div>
            {/* <div className="first-img-grid">
                <div className="first-left">
                    <img src={stamp1} />
                </div>
                <div className="first-right">
                    <img src={stamp3} />
                </div>
            </div> */}
            <div className="first-img-grid">
                <div className="first-left">
                    <img src={stamp3} />
                </div>
                <div className="first-right">
                    <img src={stamp4} />
                </div>
                <div className="first-left">
                    <img src={stamp4} />
                </div>
                <div className="first-right">
                    <img src={stamp2} />
                </div>
            </div>
            {/* <div className="first-img-grid">
                <div className="first-left">
                    <img src={stamp4} />
                </div>
                <div className="first-right">
                    <img src={stamp2} />
                </div>
            </div> */}
        </div>
    );
};
export default First;
