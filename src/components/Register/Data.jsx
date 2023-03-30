import { Link } from "react-router-dom";

function Data() {
  return (
    <div className="Register-container">
      <div className="title-container-2">
        <div className="Logo-container-register">
          <img src="/img/logoWTW.png" alt="" />
        </div>
        <h1 className="abrev-Register">WTW</h1>
        <h2 className="txt1-Register">Watering The World </h2>
        <h3 className="txt2-Register">“La agricultura se ve diferente hoy, nuestros agricultores utilizan TI que les permiten supervisar los sistemas de Riego a través de Wifi”</h3>

        <div className="Register-Img-container">
          <img src="/img/RiegoAutomatisado.jpg" alt="" />
        </div>
      </div>

      <div className="RegisterForm-container">
        <form>
          <div>
            <h1 id="Title-Register">Crear una cuenta</h1>
            <label id="User-Register">Nombre:</label>

            <input className="place" type="text" name="user" id="name-user" />
          </div>
          <br />

          <div>
            <label id="Surnames-Register">Apellidos:</label>
            <br />
            <input className="place" type="text" name="surnames-user" id="surnames-user" />
          </div>
          <br />

          <div>
            <label id="Email-Register">Correo eletrónico:</label>
            <br />
            <input className="place" type="email" name="email" id="emailConfirm1" /> <br />
          </div>
          <br /> <br />

          <div>
            <label id="Password-Register">Contraseña:</label>

            <input className="place" type="password" name="password" id="passwordConfirm1" />
          </div>
          <br />

          <input type="checkbox" id="accept-condition" value="second_checkbox"></input><a id="Condition">Acepto todos los términos y condiciones del sistema</a>

          <button id="Create-User-button-Register" >Registrarme</button>
          <Link id="Create-button_cancel" to="/">Ya tengo cuenta</Link>
        </form>
      </div>
    </div>
  );
}
export default Data;