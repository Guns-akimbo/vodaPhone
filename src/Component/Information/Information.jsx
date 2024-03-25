// import React from "react"
import "./Information.css";
import payment from "../../assets/payment.png";
import logo from "../../assets/logo.png";
import { FiArrowRight } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const Information = () => {
  return (
    <div className="bigCardContainer">
      <div className="bigCardWrapper">
        <div className="bigCardLeft ">
          <img src={payment} alt="" />
        </div>
        <div className="bigCardRight ">
          <button className="btn-Voda">Vodafone Premium</button>
          <p className="big-p">Werbefrei und mehr Power</p>
          <p className="small-p">
            Upgrade für E-Mail Bestandskunden*: Buch im E-Mail Portal den E-Mail
            & Cloud Premium-Tarif - monatlich kündbar. Neu: jetzt auch über
            Kreditkarte möglich. <br />{" "}
            <span className="firstSpan">
              * Nicht für alle Bestandstarife buchbar
            </span>
          </p>
          <article className="cardTextHolder">
            <p className="strokedText">1,99 €</p>
            <p className="monatlich">
              monatlich <span className="secondSpan">0,99 €</span>
            </p>
            <div className="Jetzt">
              Jetzt zugreifen
              <HiOutlineArrowNarrowRight
                style={{ color: "red", fontSize: "50px" }}
              />
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Information;
