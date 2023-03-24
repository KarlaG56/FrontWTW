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

            <Link to="/Statistics" id="Estadistica">
                <a>Estadistíca</a>
            </Link>

            <Link to="/RegisterESP" id="ESP32">
                <a>Registro de EP32</a>
            </Link>

            <div className='menu-container'>
                <input className='input-hamburger' type="checkbox" id="menu-hamburger" />
                <label for="menu-hamburger"> ☰ </label>
                <ul>
                    <Link to="/" className='M-Seccion'><li>My reservations</li></Link>
                    <Link to="/" className='M-Seccion'><li>Payment type</li></Link>

                </ul>
            </div>

            
        </div>
    );
}

export default Header;