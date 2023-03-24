function Data() {

    return(
        <div className="payment-container">
            <div className="payment-data-container">
                <div className="payment-data-container2">
                    <br />

                    <form>
                        <div className='Title-Register-Payment'>
                            <h1>Register ESP</h1>
                        </div>
                        <label id="card-number">otro dato:<br /><input type="text"/></label><br />
                        <label id="owner-name">Other date:<br /><input type="text"/></label><br />
                        <label id="expiration-date">conexion date:<br /><input type="date"/></label><br />
                        <label id="cvv">No. ESP:<br /><input type="text"/></label><br />
                        <button className="AddMetodoDePago">Add</button>
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