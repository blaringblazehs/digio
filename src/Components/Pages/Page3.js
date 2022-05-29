import { Link, Outlet } from "react-router-dom";
import CreateIcon from "@mui/icons-material/Create";
import ApprovalIcon from "@mui/icons-material/Approval";
import PhotoIcon from "@mui/icons-material/Photo";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import AddIcon from "@mui/icons-material/Add";
import "../page3CSS/page3.css";
import docimg from "../images/doc.jpeg";
import { Switch } from "@mui/material";
const Page3 = () => {
    return (
        <div className="page3">
            <div className="left-nav">
                <Link to="/page3/first" className="nav-item">
                    <div>
                        <CreateIcon />
                    </div>
                </Link>
                <Link to="/page3/second" className="nav-item">
                    <div>
                        <ApprovalIcon />
                    </div>
                </Link>
                <Link to="/page3/third" className="nav-item">
                    <div>
                        <PhotoIcon />
                    </div>
                </Link>
                <Link to="/page3/second" className="nav-item">
                    <div>
                        <TextFieldsIcon />
                    </div>
                </Link>
                <Link to="/page3/fourth" className="nav-item">
                    <div>
                        <AddIcon />
                    </div>
                </Link>
            </div>
            <div className="right-nav">
                <Outlet />
            </div>
            <div className="doc-nav">
                <img src={docimg} />
            </div>
            <div className="lastnav">
                <h4 className="ratio"> Image</h4>
                <div className="ratio">
                    <p>Maintain Aspect Ratio</p>
                    <Switch className="pg-switch " />
                </div>
                <div className="ratio">
                    <p>Width : </p>
                    <input type="number" placeholder="Width" />
                </div>
                <div className="ratio">
                    <p>Height : </p>
                    <input type="number" placeholder="Heigth" />
                </div>
            </div>
        </div>
    );
};
export default Page3;
