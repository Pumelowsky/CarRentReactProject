import { Container } from 'react-bootstrap';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
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
            text: 'Podsumowanie samochodów',
        },
    },
};

const labels = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Wynajętych aut',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: 'rgb(255, 19, 32)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Nowe samochody',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};
export const Statystyki = () => {
    return (
        <Container className="p-4 mt-5 text-center">
            <h1 className="border-bottom p-3">Statystyki</h1>
            <section className="py-5 draggable border-bottom">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-md-3">
                            <h1 className="text-gradient text-primary">323</h1>
                            <h5 className="mt-3">Wypożyczeń</h5>
                            <p>Wzrost wypożyczeń od ostatniego roku</p>
                        </div>
                        <div className="col-md-3">
                            <h1 className="text-gradient text-primary">200+</h1>
                            <h5 className="mt-3">Zadowolonych klientów</h5>
                            <p>Nasi klienci bardzo pozytywnie wypowiedzieli się na temat naszych usług</p>
                        </div>
                        <div className="col-md-3">
                            <h1 className="text-gradient text-primary">24/7</h1>
                            <h5 className="mt-3">Wsparcia</h5>
                            <p>Nasza firma nieprzerwania dostarczała wsparcie klientom w ciągu ostatniego roku</p>
                        </div>
                    </div>
                </div>
            </section>
            <Line options={options} data={data} />
        </Container>
    );
}

export default Statystyki;