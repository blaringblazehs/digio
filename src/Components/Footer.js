import { Link, useParams } from "react-router-dom";
import "../Components/css/footer.css";
import UploadIcon from "@mui/icons-material/Upload";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ArticleIcon from "@mui/icons-material/Article";
import { useState } from "react";
const Footer = () => {
    const [page3, setPage3] = useState(false);
    const [page2, setPage2] = useState(false);
    const changeStepper = (e) => {
        setPage3(true);
    };
    const changePage2 = (e) => {
        setPage2(true);
        setPage3(false);
    };

    return (
        <footer className="footer">
            <div className="f-page1">
                <div className="f-upload">
                    <UploadIcon className="f-upload-icon" />
                    <div className="f-horizontal-bar"></div>
                </div>
                <div>
                    <p className="f-step">STEP 1: Upload Document</p>
                </div>
            </div>
            <div className="f-page2">
                <div className="f-upload">
                    <PersonAddAlt1Icon className="f-upload-icon" />
                    <div
                        className={
                            page3
                                ? "f-horizontal-bar f-green"
                                : "f-horizontal-bar f-grey"
                        }
                    ></div>
                </div>
                <div>
                    <p className="f-step">STEP 2: Assign Signatories</p>
                </div>
            </div>
            <div className="f-page3">
                <div>
                    <ArticleIcon
                        className={
                            page3 ? "f-upload-icon " : "f-upload-icon f-grey"
                        }
                    />
                </div>
                <div>
                    <p className={page2 ? "f-step" : "f-step f-green"}>
                        Done Ready To Send
                    </p>
                </div>
            </div>

            <div className="f-btn">
                <Link to="/" className="f-back" onClick={changePage2}>
                    <p>Back</p>
                </Link>
                <Link to="/page3" className="f-next" onClick={changeStepper}>
                    <p>Next</p>
                </Link>
            </div>
        </footer>
    );
};
export default Footer;
