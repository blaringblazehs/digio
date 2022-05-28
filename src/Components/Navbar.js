import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../Components/css/navbar.css";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <ArrowForwardIcon className="nav-arrow" />
            </div>
            <div className="nav-digio">
                <p>digio</p>
            </div>
        </nav>
    );
};
export default Navbar;
