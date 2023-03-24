import "../assets/style/Footer.css";
import {Link } from 'react-router-dom';

function Footer() {

    return (
        <>
            <div className="Footer">

                <div className='div-section'>
                    <h3 className='title-sections'>Negocio</h3>
                    <Link to="/About" id="text">
                        <a >Sobre nosotros</a>
                    </Link>
                </div>

                <div className='div-section'>
                    <h3 className='title-sections'>Legal</h3>
                    <Link to="/Terms" id="text">
                        <a >Terminos</a>
                    </Link>
                    <Link to="/Policies" id="text">
                        <a id='policies'>Políticas de privacidad</a>
                    </Link>
                </div>

                <div className='div-section'>
                    <h3 className='title-sections'>Ayuda</h3>
                    <Link to="/Frequent" id="text">
                        <a id='frequent'>Preguntas frecuentes</a>
                    </Link>
                </div>


                <div className='div-section'>

                    <h3 className='title-sections'>Redes sociales</h3>
                </div>

                <div >
                    <div class="copyright">
                        © Copyright 2022. Todos los derechos reservados. Desarollado por Watering the world
                    </div>
                </div>
            </div>

        </>
    );
}
export default Footer;

//<span id='copyright'>© Copyright 2022. All rights reserved. Developed by Touring The Globe✨.</span>