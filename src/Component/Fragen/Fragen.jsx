import React from "react";
import "./Fragen.css"
import { HiOutlineArrowNarrowRight } from "react-icons/hi";



const Fragen = () =>{

return(
    <div className="fragenHolder">
        <div className="fragenWrap">
            <h1>Fragen zu Vodafone E-Mail & Cloud</h1>

            <div className="paragraph">
                <p>Hier findest Du die Antworten </p>
                <HiOutlineArrowNarrowRight  style={{color: "red", fontSize:"70px", width:"40"}}/>

            </div>
        </div>
    </div>

)
}




export default Fragen