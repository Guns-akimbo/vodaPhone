import React from "react"
import "./Footer.css"
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";




const Footer = () =>{
 return(
    <div className="footerHolder">
        <div className="footerWrap">
            <div className="topNav">
                <div className="topLeftNav">
                <p>E-Mail</p>
                <p>Vodafone Shop</p>
                <p>Mein Vodafone</p>
                <p>Hilfe/FAQ</p>
                <p>Meine Abos & Käufe</p>
                <p>Meine Downloads</p>
                </div>

                <div className="topRightNav">
                <AiFillTwitterCircle  style={{color: "white", fontSize: "35px", backgroundColor: "#2e2e2e"}}/>
                <FaFacebook   style={{color: "white", fontSize: "35px", backgroundColor: "#2e2e2e"}}/>
                <FaInstagramSquare style={{color: "white", fontSize: "35px", backgroundColor: "#2e2e2e"}} />
                </div>

            </div>
            <div className="stroke">
                <hr/>
            </div>
            <div className="downNav">
                <div className="leftNav">
                    <p>© Vodafone 2024</p>
                </div>

                <div className="rightNav">
                    <p>Vertrag kündigen</p>
                    <p>AGB</p>
                    <p>Impressum</p>
                    <p>Jugendschutz</p>
                    <p>Datenschutz</p>
                    <p>Cookies</p>
                    <p>Kontakt</p>
                </div>
            </div>
        </div>
    </div>
 )


}

export default Footer