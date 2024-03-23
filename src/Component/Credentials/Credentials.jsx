import React, {useState}from "react"
import "./Credentials.css"
import { FaEyeSlash } from "react-icons/fa"
import { FaRegEye } from "react-icons/fa6"
import { IoIosInformationCircle } from "react-icons/io";




const Credentials = () =>{
    const [showPassword, setShowPassword] = useState(false)
    const[info, setInfo] = useState(false);
    const [email, setEmail] = useState("")
    const [passWord, setPassWord] = useState("")

      
    const handleShowpassword=()=>{
        setShowPassword(!showPassword)
    }

    const [inputErrors, setInPutErrors] = useState({
        
        emailError: false,
        passWordError: false,
        infoError: false,
         msg: ""
    })


    const handlePassWord = (e) =>{
        const newValue = e.target.value
        setPassWord(newValue)   
        if(newValue.trim() === ""){
            setInPutErrors({passWordError: true, msg: "You can not leave this field blank"})
        }else{
            setInPutErrors({passWordError: false})
        }     
    }


    const handleEmail = (e) =>{
        const newValue = e.target.value
        setEmail(newValue)   
        if(newValue.trim() === ""){
            setInPutErrors({emailError: true, msg: "You can not leave this field blank"})
        }else{
            setInPutErrors({emailError: false})
        }     
    }


    const handleLogin = (e) =>{
        if( !email || !passWord ){
            setTimeout(() => {
                setInfo(true);
                // setInPutErrors({msg: "Please fill all required fields"})
            }, 2000);
        }else{
            console.log( email, passWord)

            setInfo(true);
            setInPutErrors({msg: "Successfully created"})
                    
        }
    }

    return(
            <div className="credentialBody">
                <div className="credentialsWrapper">
                    <h1>Login mit E-Mail Zugangsdaten</h1>
                    <p>Für Deine E-Mail-Konten bei Vodafone, Arcor, Kabel Deutschland und Unitymedia.</p>

                    <div className="loginForm">
                        <div className="loginFormWrap">
                            <div className="loginFormTop">
                                <input type="email" placeholder="E-Mail-Adresse" onChange={handleEmail}/>
                                {
                    inputErrors.emailError ? <p style={{fontSize: "10px", color: "red"}}>{inputErrors.msg}</p>:null
                }
                            </div>
                            <div className="loginFormDown">
                                <input type={showPassword?"text":"password"}  placeholder="E-Mail-Passwort" onChange={handlePassWord}/>
                                {
                    inputErrors.passWordError ? <p style={{fontSize: "10px", color: "red"}}>{inputErrors.msg}</p>:null
                }
                                {
            showPassword?  <FaRegEye onClick={handleShowpassword} style={{fontSize: "12px", color: "white", backgroundColor: "black"}}/>:<FaEyeSlash onClick={handleShowpassword} style={{fontSize: "12px", color: "white", backgroundColor: "black"}}/>
        }
                            </div>

                            <div className="loginFormButton" onClick={handleLogin}>
                                <button>Login</button>
                            </div>
                        </div>
                    </div>

                    <div className="infoBelowLogin">
                        <div className="text">
                            <p><a href="#">
                            MeinVodafone Login</a></p>
                            <p><a  href="#">Zugangsdaten vergensse</a></p>
                        </div>
                        <hr />
                        <div className="lastP"><p>Du hast noch kein E-Mail-Konto?<span className="midword">Dann kannst Du Dich ganz einfach</span><span><a href="#">hier registrieren.</a></span></p></div>
                    </div>
                </div>

                {info?(
                     <div className="infoShow">
                     <div className="infoShowWrap">
                         <div className="showLeft">
                         <IoIosInformationCircle style={{color: "white", backgroundColor: "red", fontSize: "24" }} />
                         </div>
                         <div className="showRight">
                             <h2>Das hat leider nicht geklappt</h2>
     <p>Versuch‘s bitte nochmal oder klick unten auf „Zugangsdaten vergessen“. Du möchtest Dich über das MeinVodafone-Konto einloggen? Dann klick einfach <a href="#">hier</a>.</p>
                         </div>
                     </div>
                 </div>
                ):null
               
            }
                
            </div>
    )
}




export default Credentials