import {useRef, useState, useContext, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";
import "../../assets/style/Login.css";
import UserContext from "../Context/UserContext"
import ValidateContext from "../Context/ValidateContext"


function Data() {

    const navigate = useNavigate();
    const {user, setUser} = useContext(UserContext);
    const {validate, setValidate} = useContext(ValidateContext);
    const form = useRef(null);

    const handleSubmit = async (event) => {
      event.preventDefault();
  
        const formData = new FormData(form.current);
        try {
            let response = await fetch("https://usersapi.wateringtheworld.click/user/validate", //http://localhost:8080/user/validate
                {method: "POST",
                headers:{
                    "Accept": "application/json"//"Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: formData.get('email'),
                    password: formData.get('password'),
                })
            })
            let data = await response.json()   
            window.localStorage.setItem("token", data.token)//window.localStorage.getItem("token")
                      
            /*console.log("soy el token")
            console.log(data.token)*/
            setUser(data.data); 
            setValidate(data.success)  
            console.log(data)   
            console.log(user)
            console.log(validate)
            data.success ? navigate("/") : alert("Correo o Contraseña incorrectos")    
        } catch (error) {
            console.log (error)
        }
}

    return (
        <div className="Login-container">
            <div className="title-container-1">
                <div className="Logo-container">
                    <img src="/img/logoWTW.svg" alt="" />
                </div>
                <div className="txt2-Login">
                    <h1>WTW</h1>
                    <h2>Watering The World </h2>
                    <h3>"La necesidad es una oportunidad para inventar"</h3>
                </div>
            </div>

            <div className="LoginForm-container">
                <form className='LoginForm' ref={form} onSubmit={handleSubmit}>
                    <div className="User-img-container">
                        <img src="/img/user.svg" alt="" />
                    </div><br />
                    <div className="email-container-login">
                        <label id="Email">Correo electrónico:</label><br />
                        <input className="place" type="text"  name="email" id='email_Login' placeholder="Correo electronico"/>
                    </div>
                    <br />
                    <div className="password-container-login">
                        <label id="Password">Contraseña:</label><br />
                        <input className="place" type="password" name="password" id='password_Login' placeholder="Contraseña"/>
                    </div>

                    <button type='submit'  id="Login-button">Iniciar sesión</button>
                    <br />
                    <div className="text-container-redireccion">
                    <h4 id='Text-Login'>¿Todavía no tienes una cuenta?</h4>
                    <Link id="Text-Register" to="/Registro">Regístrate</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Data;