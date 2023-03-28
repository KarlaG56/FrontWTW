import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { Link } from 'react-router-dom';

function Data() {
    const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    const dataset1 = {
        label: "Temperatura",
        data: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
        borderColor: 'rgba(248, 37, 37, 0.8)',
        fill: false,
        tension: 0.1
    };
    
    const dataset2 = {
        label: "Humedad",
        data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
        borderColor: 'rgba(69, 248, 84, 0.8)',
        fill: false,
        tension: 0.1
    };
    
    const data = {
        labels: labels,
        datasets: [dataset1,dataset2]
    };
    
    const config = {
        type: 'line',
        data: data,
    };
    
    new Chart(config);

    return (
        <div className="Body">
            <div className='menu-container-statistic'>
                <ul>
                    <Link to="/Ambiente" id='list-container'>
                        <a><li>Ambiente</li></a>
                    </Link>
                    <Link to="/Atmosfera" id='list-container'>
                        <a><li>Atmosfera</li></a>
                    </Link>
                    <Link to="/Tierra" id='list-container'>
                        <a><li>Tierra</li></a>
                    </Link>
                </ul>
            </div>
            <div className='div-container-statistic'>
                <Line data={data} />
            </div>
        </div>
    );
}

export default Data;