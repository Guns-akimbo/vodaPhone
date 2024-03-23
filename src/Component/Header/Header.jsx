import React from "react"
import "./Header.css"
import logo from "../../assets/logo.png"
import { IoMailOutline } from "react-icons/io5";
import { MdHelpOutline } from "react-icons/md";
import { LuArrowUpRight } from "react-icons/lu";
import { MdOutlineArrowForwardIos } from "react-icons/md";


const Header = () =>{
return(
<>
   <div className="headerBody">
    <div className="headerBodyWrapper">
        <div className="headerBodyLeftt">
            <div className="headerBodyLeftImg">
            <img  src={logo}  alt="logo"/>
            </div>
            
            <p>e-mail <span>& cloud</span></p>
        </div>
        <div className="headerBodyRight">
                <div className="div">
                <MdHelpOutline style={{color: "white",  fontSize: "24", backgroundColor: "black"}} />
                </div>
                <div className="div">
                <IoMailOutline style={{color: "white", fontSize: "24", backgroundColor: "black"}}/>
                </div>
                <div className="div" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <p style={{backgroundColor: "black"}}>vodafone.de</p>
                    <LuArrowUpRight  style={{color: "white",  fontSize: "34",  backgroundColor: "black"}}/>
                    
                </div>
        </div>
    </div>

    
   </div>

   {/* <div className="nav">
    <div className="navBody">
        <h2>Home</h2>
        <MdOutlineArrowForwardIos style={{color: "rgb(153, 153, 153)"}}/>
        <p>Vodaphone E-Mail & Cloud</p>
    </div>
   </div> */}

</>

)


}


export default Header