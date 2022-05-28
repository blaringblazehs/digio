import PersonIcon from "@mui/icons-material/Person";
import DeleteIcon from "@mui/icons-material/Delete";
import Switch from "@mui/material/Switch";
import "./css/toggleDetail.css";
const ToggleDetail = (props) => {
    return (
        <div className="personDetail-container1">
            <div className="t-text">
                <p>Same for all Singers</p>
            </div>
            <div className="t-input-container">
                <Switch className="t-switch" />
                <div className="t-line"></div>
            </div>
            <div className="t-line-bar1">
                <p>Sign By Date</p>
                <input type="date" />
            </div>
            <div className="t-line-bar2">
                <p>Signature Type</p>
                <select value="Adhaar" className="select-pa">
                    <option value="Adhaar">Adhaar</option>
                    <option value="Licence">Licence</option>
                    <option value="Pan Card">Pan Card</option>
                </select>
            </div>
            <div className="t-line-bar3">
                <p>Send Reminder In</p>
                <select value="Adhaar" className="select-pa">
                    <option value="Adhaar">Adhaar</option>
                    <option value="Licence">Licence</option>
                    <option value="Pan Card">Pan Card</option>
                </select>
            </div>
        </div>
    );
};
export default ToggleDetail;
