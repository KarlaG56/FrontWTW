import { Link } from "react-router-dom";

function Data() {
    return (
        <div className="Login-container">
            <br /><br />
            <div className="title-container-1">
                <div className="Logo-container">
                    <img src="/img/logoWTW.png" alt="" />
                </div>
                <h1 className="abrev-Login">WTW</h1>
                <h2 className="txt1-Login">Watering The World </h2>
                <div className="txt2-Login">
                    <h3>"La necesidad es una oportunidad para inventar"</h3>
                </div>
                <div className="Login-Imagen-container">
                    <img src="/img/Cultivo.jpg" alt="" />
                </div>
            </div>

            <div className="LoginForm-container">
                <form className='LoginForm'>
                    <div className="User-img-container">
                        <img src="/img/user.png" alt="" />
                    </div>
                    <div>
                        <label id="Email">Correo electrónico:</label><br />
                        <input className="place" type="text" name="email" id='email_Login' />
                    </div>
                    <br />
                    <div >
                        <label id="Password">Contraseña:</label><br />
                        <input className="place" type="password" name="password" id='password_Login' />
                    </div>

                    <button type='submit'  id="Login-button">Iniciar sesión</button>
                    <br />
                    <h4 id='Text-Login'>¿Todavía no tienes una cuenta? <Link id="Text-Register" to="/Registro">Regístrate</Link></h4>
                </form>
            </div>
        </div>
    );
}
export default Data;