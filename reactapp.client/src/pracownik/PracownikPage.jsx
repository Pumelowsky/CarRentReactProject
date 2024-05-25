import { Container, Form, Button, Row, Col, Tabs, Tab } from 'react-bootstrap';

export const Pracownik = () => {
    return (
        <Container fluid className="m-5">
            <h1 className="border-bottom p-3">Dodawanie pracownika</h1>
            <Form>
                <Tabs defaultActiveKey="danePodstawowe" id="danePracownika" className="mb-3">
                    <Tab eventKey="danePodstawowe" title="Dane podstawowe">
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Imię</Form.Label>
                                    <Form.Control type="text" placeholder="Wprowadź imię" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nazwisko</Form.Label>
                                    <Form.Control type="text" placeholder="Wprowadź nazwisko" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Stanowisko</Form.Label>
                                    <Form.Control type="text" placeholder="Wprowadź stanowisko" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Wypłata</Form.Label>
                                    <Form.Control type="number" placeholder="Wprowadź wypłatę" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="kontakt" title="Kontakt">
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Wprowadź adres email" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Numer telefonu</Form.Label>
                                    <Form.Control type="tel" placeholder="Wprowadź numer telefonu" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="inne" title="Inne">
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Data zatrudnienia</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Adres zamieszkania</Form.Label>
                                    <Form.Control type="text" placeholder="Wprowadź adres zamieszkania" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>
                <Button variant="primary" type="submit">
                    Dodaj pracownika
                </Button>
            </Form>
        </Container>
    )
}