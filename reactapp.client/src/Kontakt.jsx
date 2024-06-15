import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'; 
import Swal from "sweetalert2";

export const Kontakt = () => {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({})
    const handleFormChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleContactSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            Swal.fire({
                title: "Wysłane",
                text: "Twoja wiadomość została przesłana",
                icon: "success"
            });
        }

        setValidated(true);
    };
    return (
        <Container className="p-4 mt-5 text-center lg col-md-6 col-xs-12">
            <h1 className="border-bottom p-3">Kontakt</h1>
            <Form onSubmit={handleContactSubmit} onChange={handleFormChange} noValidate validated={validated}>
                <Form.Group className="mb-2">
                    <Form.Control type="text" name="name" placeholder="Imię i nazwisko" required={true} />
                    <Form.Control.Feedback type="invalid">
                        Imię i nazwisko jest wymagane!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Control type="email" name="email" placeholder="Adres Email" required={true} />
                    <Form.Control.Feedback type="invalid">
                        Podaj adres email w prawidłowym formacie!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Control type="tel" name="phone" placeholder="Numer telefonu (+48123456789)" required={true} />
                    <Form.Control.Feedback type="invalid">
                        Numer telefonu jest wymagany!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Control as="textarea" name="message" rows={3} placeholder="Wiadomość" required={true} />
                    <Form.Control.Feedback type="invalid">
                        Wprowadź wiadomość!
                    </Form.Control.Feedback>
                </Form.Group>

                <div className="d-grid">
                    <Button variant="primary" className="border-0 py-2" type="submit">Wyślij</Button>
                </div>
            </Form>
        </Container>
    );
}

export default Kontakt;