

function Data() {

    return(
        <div className="payment-container">
            <div className="payment-data-container">
                <div className="payment-data-container2">
                    <br />

                    <form>
                        <div className='Title-Register-Payment'>
                            <h1>Register ESP32</h1>
                        </div>
                        <label id="card-number">Clave:<br /><input type="text"/></label>
                        <br />
                        <label id="owner-name">Tipo:<br /><input type="text"/></label><br />
                        <button className="AddMetodoDePago">Añadir</button>
                    </form>
                </div>

            </div>
            <div className="payment-scroll-container">
                <div className="header-scroll">
                    <br/>
                    <h1 className="Title-RegisteredPaymentMethods">Esp</h1>
                </div>
                <div className="content-scroll-container">
                    <div className="content-scroll-data">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Data;