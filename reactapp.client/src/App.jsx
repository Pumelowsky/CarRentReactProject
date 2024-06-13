import Aktualnosci from './Aktualnosci';
import './App.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
function App() {
    return (
        <Container data-bs-theme="dark">
            <Container className="mt-5 m-4 text-center">
                <h1>Witaj w Wypożyczalni Samochodowej</h1>
                <p>Znajdź swój idealny samochód już dziś!</p>
                <Link to="/towary"><Button variant="primary">Zobacz Ofertę</Button></Link>
            </Container>
            <Container className="mt-5 m-4 text-center">
                <Aktualnosci />
            </Container>
            <Container className="mt-5 m-4 text-center pt-5 border-top">
                <h1 className="text-muted">BESTSELLERY</h1>
            </Container>
            <Container className="mt-5 pb-5 border-bottom">
                <Row>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="image/car1.png" />
                            <Card.Body>
                                <Card.Title>Samochód 1</Card.Title>
                                <Card.Text>
                                    Opis samochodu 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Card.Text>
                                <Card.Subtitle className="mb-2 text-muted">Cena: 3500.00zł/mies.</Card.Subtitle>
                                <Button variant="primary">Wynajmij</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="image/car2.png" />
                            <Card.Body>
                                <Card.Title>Samochód 2</Card.Title>
                                <Card.Text>
                                    Opis samochodu 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Card.Text>
                                <Card.Subtitle className="mb-2 text-muted">Cena: 1200.00zł/mies.</Card.Subtitle>
                                <Button variant="primary">Wynajmij</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="image/car3.png" />
                            <Card.Body>
                                <Card.Title>Samochód 3</Card.Title>
                                <Card.Text>
                                    Opis samochodu 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Card.Text>
                                <Card.Subtitle className="mb-2 text-muted">Cena: 2000.00zł/mies.</Card.Subtitle>
                                <Button variant="primary">Wynajmij</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container className="text-center mt-5">
                <Row>
                    <Col><h1 className="text-primary">Statystyki</h1></Col>
                </Row>
            </Container>
            <Container className="text-center mt-5">
                <Row className="pt-3 pb-5 d-flex justify-content-around">
                    <Col className="d-flex justify-content-center">
                        <div className="border-bottom border-primary w-75 p-2">
                            <h2 className="text-primary">400+</h2>
                            <h4>klientów</h4>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <div className="border-bottom border-primary w-75 p-2">
                            <h2 className="text-primary">99%</h2>
                            <h4>Pozytywnych opinii</h4>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <div className="border-bottom border-primary w-75 p-2">
                            <h2 className="text-primary">50+</h2>
                            <h4>dostępnych samochodów</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default App;