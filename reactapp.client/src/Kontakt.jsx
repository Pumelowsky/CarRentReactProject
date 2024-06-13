import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'; 
import Swal from "sweetalert2";

export const Kontakt = () => {
    const [formData, setFormData] = useState({})
    const handleFormChange = e => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleContactSubmit = event => {

        event.preventDefault();
                Swal.fire({
                    title: "Wysłane",
                    text: "Twoja wiadomość została przesłana",
                    icon: "success"
                });
    }
    return (
        <Container className="p-4 mt-5 text-center md w-50">
            <h1 className="border-bottom p-3">Kontakt</h1>
            <Form onSubmit={handleContactSubmit}>
                <Form.Control type="text" name="name" placeholder="Imię i nazwisko" className="mb-2" onChange={handleFormChange} required={true} />
                <Form.Control type="email" name="email" placeholder="Adres Email" className="mb-2" onChange={handleFormChange} required={true} />
                <Form.Control type="tel" name="phone" placeholder="Numer telefonu (+48123456789)" className="mb-2" onChange={handleFormChange} required={true} />
                <Form.Control as="textarea" name="message" rows={3} placeholder="Wiadomość" className="mb-2" onChange={handleFormChange} required={true} />

                <div className="d-grid">
                    <Button variant="primary" className="border-0 py-2" type="submit">Wyślij</Button>
                </div>
            </Form>
        </Container>
    );
}

export default Kontakt;