import "./HowToAiverse";
import React from "react";
import astro from "../../assets/images/astro.jpg";

function Box(){
    return(
        <div className="box">
            <h3 className="imagin">Imaginate to Create</h3>
            <img src={astro} alt="space" className="space" />
        </div>    
    )
}

export default Box;