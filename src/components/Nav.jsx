import { Link } from 'react-router-dom';


function Aside() {

    const logout = () => {
        setUser(null)
        setValidate(false)
        window.localStorage.removeItem("token")
    }


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    

    return (
        <nav className='Nav-controler'>
            <Link to="" className='Block'>
                <a>| Estadística |</a>
            </Link>

            <Link to="/Registro-ESP32" className='Block'>
                <a>| Registro de ESP32 |</a>
            </Link>

            <Link to="/" className='Block'>
                <a>| Cambiar contraseña |</a>
            </Link>

            <Link to="/Estadistica" className='Block' onClick={handleClickOpen}>
                <a>| Eliminar cuenta |</a>
            </Link>

            <Link to="/" className='Block' onClick={logout}>
                <a>| Cerrar sesión </a>
            </Link>

          
        </nav>
    )
}

export default Aside;