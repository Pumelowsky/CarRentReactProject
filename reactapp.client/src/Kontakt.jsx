import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'; 
export const Kontakt = () => {
    return (
        <Container className="p-4 mt-5 text-center">
            <h1 className="border-bottom p-3">Kontakt</h1>
            <Form style={{ maxWidth: '400px', margin: '0 auto' }}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Imię i nazwisko</Form.Label>
                    <Form.Control type="text" placeholder="Wprowadź imię i nazwisko" />
                </Form.Group>

                <Form.Group controlId="formBasicPhone">
                    <Form.Label>Numer telefonu</Form.Label>
                    <Form.Control type="tel" placeholder="Wprowadź numer telefonu" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Wprowadź adres email" />
                </Form.Group>

                <Form.Group controlId="formBasicMessage">
                    <Form.Label>Treść wiadomości</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Wprowadź treść wiadomości" />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                    Wyślij
                </Button>
            </Form>
        </Container>
    );
}

export default Kontakt;