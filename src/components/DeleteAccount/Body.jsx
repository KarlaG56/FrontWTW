function Body(){
    return (
        <div className="Box-Delete-acount">
            <div className="Alert-container">
                <p>
                Esta acción no se puede deshacer. Esto eliminará permanentemente toda su cuenta. Se eliminarán todos los espacios de trabajo privados y se le eliminará de todos los espacios de trabajo compartidos.
                </p>
                <p>
                Por favor, escriba su contraseña para confirmar.
                </p>
            </div>
            <div className="confirm-delete-container">
                <input type="password" placeholder="Ingrese su contraseña" id='alert-password-input'/><br />
                <button id='button-alert-confirm'>Confirmar</button><br />
                <button id='button-alert-cancel'>Cancelar</button>
            </div>
        </div>
    )
}

export default Body;