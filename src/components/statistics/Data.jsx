import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function Data() {
    const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    const dataset1 = {
        label: "Humedad de Tierra",
        data: [10, 55, 60, 120, 10, 55, 60, 120, 10, 55, 60, 120],
        borderColor: 'rgba(248, 37, 37, 0.8)',
        fill: false,
        tension: 0.1
    };
    
    const dataset2 = {
        label: "Temperatura de la Tierra",
        data: [120, 44, 55, 100, 5, 44, 55, 100, 5, 44, 55, 100],
        borderColor: 'rgba(69, 248, 84, 0.8)',
        fill: false,
        tension: 0.1
    };
    
    const dataset3 = {
        label: "Humedad del Ambiente",
        data: [20, 40, 55, 120, 20, 40, 55, 120, 20, 40, 55, 120],
        borderColor: 'rgba(69, 140, 248, 0.8)',
        fill: false,
        tension: 0.1
    };
    
    const dataset4 = {
        label: "Temperatura del Ambiente",
        data: [18, 40, 20, 100, 18, 40, 20, 100, 18, 40, 20, 100],
        borderColor: 'rgba(245, 40, 145, 0.8)',
        fill: false,
        tension: 0.1
    };
    
    const data = {
        labels: labels,
        datasets: [dataset1,dataset2,dataset3,dataset4]
    };
    
    const config = {
        type: 'line',
        data: data,
    };
    
    new Chart(config);

    return (
        <div className="Body">
            <div className='div-container-statistic'>
                <Line data={data} />
            </div>
        </div>
    );
}

export default Data;