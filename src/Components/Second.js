import { Switch } from "@mui/material";

const Second = () => {
    return (
        <div className="lastnav">
            <h2 style={{ marginTop: "20px" }}>Second</h2>
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
            <h2 style={{ marginTop: "20px" }}>Text Edit</h2>
            <div className="ratio">
                <p>Width : </p>
                <input type="number" placeholder="Width" />
            </div>
            <div className="ratio">
                <p>Height : </p>
                <input type="number" placeholder="Heigth" />
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
    );
};
export default Second;
