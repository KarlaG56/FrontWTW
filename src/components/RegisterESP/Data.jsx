import { useState, useContext, useEffect } from 'react';
import UserContext from '../context/UserContext';
import Card from './card'

function Data() {

    const { user } = useContext(UserContext)

    const [Clave, SetClave] = useState('');
    const [Tipo, setTipo] = useState('');
    const [Data, setData] = useState(null);

    const handleChangeClave = (event) => { SetClave(event.target.value) }
    const handleChangeTipo = (event) => { setTipo(event.target.value) }

    useEffect(function () {
        let l = "https://esp32api.wateringtheworld.click/esp32/" + user.id
        fetch(l)
            .then(response => response.json())
            .then(data => { setData(data); })
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        let link = "https://esp32api.wateringtheworld.click/esp32/" + user.id
        fetch(link,
            {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Authorization": window.localStorage.getItem("token")
                },
                body: JSON.stringify({
                    keyEsp32: Clave,
                    type: Tipo
                }),
            })
    }

    return (
        <div className="payment-container">
            <div className="payment-data-container">
                <div className="payment-data-container2">
                    <form onSubmit={handleSubmit}>
                        <div className='Title-Register-Payment'>
                            <h1>Register ESP32</h1>
                        </div>
                        <label id="card-number">Clave:<br/><input type="text" id="inpt-data" value={Clave} onChange={handleChangeClave}/></label>
                        <br />
                        <label id="owner-name">Tipo:<br/><input type="text" id="inpt-data" value={Tipo} onChange={handleChangeTipo}/></label><br />
                        <button className="AddMetodoDePago">Añadir</button>
                    </form>
                </div>

            </div>
            <div className="payment-scroll-container">
                <div className="header-scroll">
                    <h1 className="Title-RegisteredPaymentMethods">Registros</h1>
                </div>
                <div className="content-scroll-container">
                    <div className="content-scroll-data">
                        {
                            Data && Data.map(esp => (
                                <Card
                                    key={esp.id}
                                    clave={esp.Clave}
                                    tipo={esp.Tipo}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Data;