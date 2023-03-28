import "../assets/style/Footer.css";
import {Link } from 'react-router-dom';

function Footer() {

    return (
        <>
            <div className="Footer">

                <div className='div-section'>
                    <h3 className='title-sections'>Negocio</h3>
                    <Link to="/Sobre-nosotros" id="text">
                        <a >Sobre nosotros</a>
                    </Link>
                </div>

                <div className='div-section'>
                    <h3 className='title-sections'>Legal</h3>
                    <Link to="/Terminos" id="text">
                        <a >Terminos</a>
                    </Link>
                    <Link to="/Politicas" id="text">
                        <a >Políticas de privacidad</a>
                    </Link>
                </div>

                <div className='div-section'>
                    <h3 className='title-sections'>Ayuda</h3>
                    <Link to="/Preguntas-frecuentes" id="text">
                        <a >Preguntas frecuentes</a>
                    </Link>
                </div>


                <div className='div-section'>

                    <h3 className='title-sections'>Contactanos</h3>
                    <a >systemwtw@gmail.com</a>
                </div>

                <div >
                    <div class="copyright">
                        © Copyright 2023. Todos los derechos reservados. Desarollado por Watering the world
                    </div>
                </div>
            </div>

        </>
    );
}
export default Footer;

//<span id='copyright'>© Copyright 2022. All rights reserved. Developed by Touring The Globe✨.</span>