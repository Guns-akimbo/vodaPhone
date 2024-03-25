import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { IoMailOutline } from "react-icons/io5";
import { MdHelpOutline } from "react-icons/md";
import { LuArrowUpRight } from "react-icons/lu";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Header = () => {
  return (
    <>
      <div className="headerBody">
        <div className="headerBodyWrapper">
          <div className="headerBodyLeftt">
            <div className="headerBodyLeftImg">
              <img src={logo} alt="logo" />
            </div>

            <p>
              e-mail <span>& cloud</span>
            </p>
          </div>
          <div className="headerBodyRight">
            <div className="div">
              <MdHelpOutline className="divicon"
            
              />
            </div>
            <div className="div">
              <IoMailOutline className="divicon"
           
              />
            </div>
            <div
              className="div1" 
            
            >
              <p className="ptext1">vodafone.de</p>
              <LuArrowUpRight className="divicon1"
           
              />
            </div>
          </div>
        </div>
      </div>

      <div className="nav">
        <div className="navBody">
          <h6 className="pp">Home</h6>
          <MdOutlineArrowForwardIos style={{ color: "rgb(153, 153, 153)" }} />
          <p>Vodaphone E-Mail & Cloud</p>
        </div>
      </div>
    </>
  );
};

export default Header;
