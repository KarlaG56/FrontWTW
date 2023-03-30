import { Link } from "react-router-dom";
import "../../assets/style/Register.css";

function Data() {
  return (
    <div className="Register-container">
      <div className="title-container-2">
        <div className="Logo-container-register">
          <img src="/img/logoWTW.svg" alt="" />
        </div>
        <div className="text-container-title">
        <h1>WTW</h1>
        <h2>Watering The World</h2>
        <h3>“La agricultura se ve diferente hoy, nuestros agricultores utilizan TI que les permiten supervisar los sistemas de Riego a través de Wifi”</h3>
        </div>

        <div className="Register-Img-container">
          <img src="/img/RiegoAutomatisado.jpg" alt="" />
        </div>
      </div>

      <div className="RegisterForm-container">
        <form className="form-container-register">
          <div className="title-container-register">
            <h1 id="Title-Register">Crear una cuenta</h1>
            <label id="User-Register"><strong>Nombre:</strong></label><br />
            <input className="place" type="text" name="user" id="name-user" placeholder="Nombre"/><br />
          </div><br />
          <div className="input-lastname-container">
            <br /><label id="Surnames-Register"><strong>Apellidos:</strong></label><br />
            <input className="place" type="text" name="surnames-user" id="surnames-user" placeholder="Apellidos" />
          </div>
          <div className="input-email-container">
            <label id="Email-Register"><strong>Correo eletrónico:</strong></label><br />
            <input className="place" type="email" name="email" id="emailConfirm1" placeholder="Correo electronico"/> 
          </div>

          <div className="input-password-container">
            <label id="Password-Register"><strong>Contraseña:</strong></label><br />
            <input className="place" type="password" name="password" id="passwordConfirm1" placeholder="Contraseña"/>
          </div>
          <div className="button-container-accept">
          <input type="checkbox" id="accept-condition" value="second_checkbox"></input><a id="Condition">Acepto todos los términos y condiciones del sistema</a><br />
          <button id="Create-User-button-Register" >Registrarme</button>
          <Link to="/"><button id="Create-button_cancel" >Ya tengo cuenta</button></Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Data;