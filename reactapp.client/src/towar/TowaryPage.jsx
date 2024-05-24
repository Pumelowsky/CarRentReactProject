import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Towary = () => {
    return (
        <Container fluid className="m-5">
            <Accordion defaultActiveKey="0" className="mb-5">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Filtrowanie listy</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row>
                                <Col sm={4}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Szukaj po VIN</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Cena od</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Cena do</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col sm={4}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Szukaj kat.</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Wybierz</option>
                                            <option value="1">VAN</option>
                                            <option value="2">Elektryk</option>
                                            <option value="3">Sport</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Marka</th>
                        <th>Model</th>
                        <th>Kategoria</th>
                        <th>VIN</th>
                        <th>Cena za 24H</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Honda</td>
                        <td>Civic</td>
                        <td>Sport</td>
                        <td>111111111111111111</td>
                        <td>111</td>
                    </tr>
                    <tr>
                        <td>Ford</td>
                        <td>Focus ST</td>
                        <td>Sport</td>
                        <td>222222222222222222</td>
                        <td>222</td>
                    </tr>
                    <tr>
                        <td>Opel</td>
                        <td>Vivaro</td>
                        <td>VAN</td>
                        <td>333333333333333333</td>
                        <td>333</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
       
    )
}