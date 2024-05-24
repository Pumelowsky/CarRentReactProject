import { Container } from 'react-bootstrap';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    ArcElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Podsumowanie sprzedaży',
        },
    },
};

export const options2 = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Zadowolenie klientów',
        },
    },
};

const labels = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Straty',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 19, 32)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dochód',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const doughnutData = {
    labels: ['Pozytywne', 'Neutralne', 'Negatywne'],
    datasets: [
        {
            data: [75, 15, 10],
            backgroundColor: ['#00A200', '#FFCE56', '#FF6384'],
        },
    ],
};
export const StatystykiPracownicze = () => {
    return (
        <Container className="p-4 mt-5 justify-content-center text-center">
            <h1 className="border-bottom p-3">Statystyki</h1>
            <Line options={options} data={data} />
            <section className="d-flex justify-content-center align-items-center p-5 mt-5">
                <Doughnut options={options2} data={doughnutData} className="w-50 h-auto" />
            </section>
        </Container>
    );
}

export default StatystykiPracownicze;