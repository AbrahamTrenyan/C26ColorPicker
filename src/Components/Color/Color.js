import React, { useState } from "react";
const Color = () => {
    const [rgb, setRgb] = useState("#000000")
    return (
        <div className="container-fluid" style={{ backgroundColor: rgb, height: "600px", display: "flex", justifyContent: "center", alignItems: "center", overflow: "auto", }}>
            <div style={{ backgroundColor: "white", width: "300px", height: "150px", textAlign: "center", borderRadius: "25px" }}>
                <h1>Color Picker</h1>
                <form>
                    <label style={{ marginBottom: "20px" }}>Elegi un color para el fondo:</label>
                    <div className="row">
                        <input type={"color"} className="col-3" style={{ marginTop: "20px", margin: "0 auto" }} onChange={(e => setRgb(e.target.value))} />
                        <input type={"text"} className="col-6" style={{ margin: "0 auto" }} value={rgb} />
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Color;