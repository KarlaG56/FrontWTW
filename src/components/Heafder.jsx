import "../assets/style/Header.css";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="Header">
            <Link to="/" id="logo">
                <div id="place-1">
                    <img src="/img/logoWTW.png" />
                </div>
                <a className='div-title'>Watering the world </a>
            </Link>

            <Link to="/Estadisticas" id="Estadistica">
                <a>Estadistíca</a>
            </Link>
            <ul>
                <Link to="/Tierra" id="Estadistica">
                    <li><a href="#">Tierra</a></li>
                </Link>
                <Link to="/Ambiente" id="Estadistica">
                    <li><a href="#">Ambiente</a></li>
                </Link>
                <Link to="/Atmosfera" id="Estadistica">
                    <li><a href="#">Atmosfera</a></li>
                </Link>
            </ul>

            <Link to="/RegisterESP" id="ESP32">
                <a>Registro de EP32</a>
            </Link> 
        </div> 
    );
}

export default Header;
