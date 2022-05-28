import PersonIcon from "@mui/icons-material/Person";
import DeleteIcon from "@mui/icons-material/Delete";
import "./css/personDetail.css";
const PersonDetail = (props) => {
    return props.number.map((val) => (
        <div className="p-detail-cont">
            <div className="personDetail-container">
                <div className="detail-avatar">
                    <p className="corner-number">{val}</p>
                    <PersonIcon className="person-detail-icon" />
                </div>
                <div className="p-input-container">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email or Mobile" />
                </div>
                <div className="p-input-container">
                    <input type="date"></input>
                </div>
                <div className="p-input-container">
                    <select value="Adhaar" className="select-pa">
                        <option value="Adhaar">Adhaar</option>
                        <option value="Licence">Licence</option>
                        <option value="Pan Card">Pan Card</option>
                    </select>
                </div>
                <div className="p-input-container">
                    <select value="Adhaar" className="select-pa pa2">
                        <option value="Adhaar">Remind In</option>
                        <option value="Licence">Licence</option>
                        <option value="Pan Card">Pan Card</option>
                    </select>
                    <div className="p-delete-icon">
                        <DeleteIcon />
                    </div>
                </div>
            </div>
        </div>
    ));
};
export default PersonDetail;
