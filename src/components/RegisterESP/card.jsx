function cardPay(props) {
    return (
        <div className="payment-card">
            <br/><br/>
            <span>Clave: {props.card}</span><br/>
            <span>Tipo: {props.date}</span><br />
            <br/>
        </div>
    )
}
export default cardPay;