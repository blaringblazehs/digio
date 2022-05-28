import "../css/page2.css";
import doc from "../images/doc.jpeg";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonDetail from "../PersonDetail";
import { useState } from "react";
import ToggleDetail from "../ToggleDetail";
import { Switch } from "@mui/material";
const Page2 = () => {
    let arr = [1, 2, 3, 4, 5];
    const [addPerson, setAddPerson] = useState([1, 2]);
    const handlePerson = () => {
        setAddPerson((prev) => {
            return [...prev, prev.length + 1];
        });
    };
    return (
        <div className="page2">
            <div className="p-left">
                <h2>left</h2>
                {arr.map((val) => (
                    <div className="left-img-div">
                        <img src={doc} />
                    </div>
                ))}
            </div>
            <div className="p-right-container">
                <div className="p-right-nav">
                    <div className="p-right-person-container">
                        <div>
                            <PersonIcon className="p-person-icon" />
                        </div>
                        <div className="p-right-step">
                            <p>STEP 2</p>
                            <h3>Assign Signatories</h3>
                        </div>
                    </div>
                </div>
                <div className="p-right-btm">
                    <ToggleDetail />
                    <div>
                        <PersonDetail
                            handlePerson={handlePerson}
                            number={addPerson}
                        />
                    </div>
                    <div>
                        <button
                            className="add-person-btn"
                            onClick={handlePerson}
                        >
                            <PersonAddAlt1Icon />
                            <p>Add Person</p>
                        </button>
                    </div>
                    <div className="pg2-toggle">
                        <div>
                            <p>Sequencial Signing</p>
                        </div>
                        <Switch className="pg-switch" />
                    </div>
                    <div className="pg2-toggle bg-dark">
                        <div>
                            <p>Attach Estamp ( Optional )</p>
                        </div>
                        <Switch className="pg-switch bg-dark" />
                    </div>
                    <div className="pg2-toggle bg-dark">
                        <div>
                            <p>Add Post Signing Email Recievers ( Optional )</p>
                        </div>
                        <Switch className="pg-switch" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Page2;
