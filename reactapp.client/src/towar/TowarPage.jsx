import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export const Towar = () => {
    return (
        <Container fluid className="m-5">
            <Form>
                <Row>
                    <Tabs
                        defaultActiveKey="danePodstawowe"
                        id="daneTowaru"
                        className="mb-3"
                    >
                        <Tab eventKey="danePodstawowe" title="Dane podstawowe">
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nr VIN</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Kod lakieru</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Marka</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                <Form.Group className="mb-3">
                                        <Form.Label>Model</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Kategorie</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Wybierz</option>
                                            <option value="1">VAN</option>
                                            <option value="2">Elektryk</option>
                                            <option value="3">Sport</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                        </Tab>
                        <Tab eventKey="cena" title="Cena">
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Cena najmu za 24h</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Cena najmu za 7 dni</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Cena najmu za 30 dni</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="uwagi" title="Uwagi" >
                            <Row>
                                <Col xs={8}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Dodatkowe informacje</Form.Label>
                                        <Form.Control as="textarea" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Uwagi</Form.Label>
                                        <Form.Control as="textarea" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>

                </Row>
                <Row>
                    <Col xs="auto" className="pb-3">
                        <Button variant="success">Zapisz</Button>{' '}
                        <Button variant="danger">Anuluj</Button>{' '}
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}