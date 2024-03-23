import React from "react";
import "./Fragen.css"
import { FiArrowRight } from "react-icons/fi";



const Fragen = () =>{

return(
    <div className="fragenHolder">
        <div className="fragenWrap">
            <h1>Fragen zu Vodafone E-Mail & Cloud</h1>

            <div className="paragraph">
                <p><a>Hier findest Du die Antworten </a></p>
                <FiArrowRight style={{color: "red", fontSize:"40px"}}/>

            </div>
        </div>
    </div>

)
}




export default Fragen