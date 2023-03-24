function cardPay(props) {
    return (
        <div className="payment-card">
            <br/><br/>
            <span>Card Number: {props.card}</span><br/>
            <span>Expiration Date: {props.date}</span><br />
            <span>Owner Name: {props.name}</span><br/>
            <span>CVV:{props.cvv}</span><br />
            <br/>

        </div>
    )
}
export default cardPay;