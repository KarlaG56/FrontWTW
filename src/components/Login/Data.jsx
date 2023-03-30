import { Link } from "react-router-dom";
import "../../assets/style/Login.css"

function Data() {
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
                <form className='LoginForm'>
                    <div className="User-img-container">
                        <img src="/img/user.svg" alt="" />
                    </div><br />
                    <div className="email-container-login">
                        <label id="Email">Correo electrónico:</label><br />
                        <input className="place" type="text" name="email" id='email_Login' placeholder="Correo electronico"/>
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