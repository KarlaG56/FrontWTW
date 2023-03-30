import { Link } from 'react-router-dom';
import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';

function Aside() {

    const [open, setOpen] = React.useState(false);

    const logout = () => {
        setUser(null)
        setValidate(false)
        window.localStorage.removeItem("token")
    }

    const handleClickOpenPassword = () => {
        setOpen(true);
    };

    const handleClosePassword = () => {
        setOpen(false);
    };

    const [openDelete, setOpenDelete] = React.useState(false);
    const handleClickOpenDelete = () => {
        setOpenDelete(true);
    };

    const handleCloseDelete = () => {
        setOpenDelete(false);
    };

    return (
        <nav className='Nav-controler'>
            <Link to="/Estadistica" className='Block'>
                <a>| Estadística |</a>
            </Link>

            <Link to="/Registro-ESP32" className='Block'>
                <a>| Registro de ESP32 |</a>
            </Link>

            <a><button onClick={handleClickOpenPassword} id='btn-delete-account'>| Cambiar contraseña |</button></a>

            <Dialog open={open} onClose={handleClosePassword}>
                <DialogTitle>Cambiar contraseña.</DialogTitle>
                <DialogContent>
                    <DialogContentText>Contraseña actual</DialogContentText>
                </DialogContent>
                <input type="password" placeholder="Contraseña actual" id='aler-input-actpassword' /><br />

                <DialogContent>
                    <DialogContentText>Nueva contraseña</DialogContentText>
                </DialogContent>
                <input type="password" placeholder="Nueva contraseña" id='aler-input-newpassword' /><br />

                <DialogContent>
                    <DialogContentText>Confirmar nueva contraseña</DialogContentText>
                </DialogContent>
                <input type="password" placeholder="Confirmar nueva contraseña" id='aler-input-confpassword' /><br />

                <DialogActions>
                    <button id='button-alert-confirm-password'>Guardar</button><br />
                </DialogActions>
                <DialogActions>
                    <button onClick={handleClosePassword} id='button-alert-cancel-password'>Cancelar</button>
                </DialogActions>
            </Dialog>


            <a><button onClick={handleClickOpenDelete} id='btn-delete-account'>| Eliminar cuenta |</button></a>
            <Dialog open={openDelete} onClose={handleCloseDelete}>
                <DialogTitle>Esta acción no se puede deshacer. Esto eliminará permanentemente toda su cuenta. Se eliminarán todos los espacios de trabajo privados.</DialogTitle>
                <DialogContent>
                    <DialogContentText>Por favor, escriba su contraseña para confirmar..</DialogContentText>
                </DialogContent>
                <input type="password" placeholder="Ingresar contrseña" id='alert-password-input' /><br />
                <DialogActions>
                    <button id='button-alert-confirm'>Eliminar cuenta de forma permanente.</button><br />
                </DialogActions>
                <DialogActions>
                    <button onClick={handleCloseDelete} id='button-alert-cancel'>Cancelar</button>
                </DialogActions>
            </Dialog>

            <Link to="/" className='Block' onClick={logout}>
                <a>| Cerrar sesión </a>
            </Link>
        </nav>
    )
}

export default Aside;