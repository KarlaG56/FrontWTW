function cardPay(props) {
    return (
        <div className="payment-card">
            <br/><br/>
            <span>Clave: {props.Clave}</span><br/>
            <span>Tipo: {props.Tipo}</span><br />
            <br/>
        </div>
    )
}
export default cardPay;