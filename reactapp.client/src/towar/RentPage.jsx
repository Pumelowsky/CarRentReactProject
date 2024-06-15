import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Swal from "sweetalert2";

export const RentPage = () => {
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
            title: "Zarezerwowane",
            text: "Samochód został zarezerwowany",
            icon: "success"
        });
    }
    return (
        <Container className="p-4 mt-5 text-center md w-50">
            <h1 className="border-bottom p-3">Rezerwacja</h1>
            <Form onSubmit={handleContactSubmit}>
                <Form.Label>Imię i nazwisko:</Form.Label>
                <Form.Control type="text" name="name" placeholder="Imię i nazwisko" className="mb-2" onChange={handleFormChange} required={true} />
                <Form.Label>E-mail:</Form.Label>
                <Form.Control type="email" name="email" placeholder="Adres Email" className="mb-2" onChange={handleFormChange} required={true} />
                <Form.Label>Telefon:</Form.Label>
                <Form.Control type="tel" name="phone" placeholder="Numer telefonu (+48123456789)" className="mb-2" onChange={handleFormChange} required={true} />
                <Form.Label>Dodatkowe prośby:</Form.Label>
                <Form.Control as="textarea" name="message" rows={3} placeholder="Dodatkowe informacje" className="mb-2" onChange={handleFormChange} required={true} />
                <Form.Label>Od:</Form.Label>
                <Form.Control type="date" name="od" required={true} className="mb-2" />
                <Form.Label>Do:</Form.Label>
                <Form.Control type="date" name="do" required={true} className="mb-2" />
                <div className="d-grid m-5">
                    <Button variant="primary" className="border-0 py-2" type="submit">Wyślij</Button>
                </div>
            </Form>
        </Container>
    );
}

export default RentPage;