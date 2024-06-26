﻿import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export const Towary = () => {
    const cars = [
        { id: 1, Marka: "Opel", Model: "Zafira", VIN: "W0L0TGF75G1234567", Cena: 600, Kategoria: "Elektryk", img: 'image/auto1.png' },
        { id: 2, Marka: "Kia", Model: "Carens", VIN: "KNAGF4A78F1234567", Cena: 750, Kategoria: "Sport", img: 'image/auto2.png' },
        { id: 3, Marka: "Toyota", Model: "Proace City Verso", VIN: "JTDFR320501234567", Cena: 800, Kategoria: "VAN", img: 'image/auto3.png' },
        { id: 4, Marka: "Ford", Model: "Tourneo Connect", VIN: "WF0XXXTTFX1234567", Cena: 700, Kategoria: "VAN", img: 'image/auto4.png' },
        { id: 5, Marka: "Volkswagen", Model: "Caddy", VIN: "WV1ZZZ2KZ12345678", Cena: 720, Kategoria: "VAN", img: 'image/auto5.png' },
        { id: 6, Marka: "Alfa Romeo", Model: "Giulia", VIN: "VF77XXXXX12345678", Cena: 280, Kategoria: "Sport", img: 'image/auto6.png' },
        { id: 7, Marka: "Ford", Model: "Mustang", VIN: "VF3YXXXXX12345678", Cena: 300, Kategoria: "Sport", img: 'image/auto7.png' },
        { id: 8, Marka: "Volkswagen", Model: "Golf R", VIN: "ZFA26300012345678", Cena: 160, Kategoria: "Sport", img: 'image/auto8.png' }
    ];

    const [filters, setFilters] = useState({
        vin: '',
        priceMin: '',
        priceMax: '',
        category: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
    };

    const filteredCars = cars.filter(car => {
        return (
            (filters.vin === '' || car.VIN.includes(filters.vin)) &&
            (filters.priceMin === '' || car.Cena >= parseFloat(filters.priceMin)) &&
            (filters.priceMax === '' || car.Cena <= parseFloat(filters.priceMax)) &&
            (filters.category === '' || car.Kategoria === filters.category)
        );
    });

    return (
        <Container fluid className="m-5">
            <h1 className="border-bottom p-3">Nasza flota</h1>
            <Accordion defaultActiveKey="0" className="mb-5">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Filtrowanie listy</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row>
                                <Col sm={4}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Szukaj po VIN</Form.Label>
                                        <Form.Control type="text" name="vin" value={filters.vin} onChange={handleInputChange} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Cena od</Form.Label>
                                        <Form.Control type="number" name="priceMin" value={filters.priceMin} onChange={handleInputChange} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Cena do</Form.Label>
                                        <Form.Control type="number" name="priceMax" value={filters.priceMax} onChange={handleInputChange} />
                                    </Form.Group>
                                </Col>
                                <Col sm={4}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Szukaj kat.</Form.Label>
                                        <Form.Select name="category" value={filters.category} onChange={handleInputChange}>
                                            <option value="">Wybierz</option>
                                            <option value="VAN">VAN</option>
                                            <option value="Elektryk">Elektryk</option>
                                            <option value="Sport">Sport</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Row>
                {filteredCars.map((car) => (
                    <Col key={car.id} xs={12} sm={6} md={4} lg={3}>
                        <Card className="mb-4">
                            <Card.Img variant="top" src={car.img} />
                            <Card.Body>
                                <Card.Title>{car.Marka} {car.Model}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Kategoria: {car.Kategoria}</Card.Subtitle>
                                <Card.Text>
                                    <p>Cena najmu: {car.Cena} zł/24h</p>
                                    <p className="text-muted">VIN: {car.VIN}</p>
                                    <Link to="/rent">
                                        <Button variant="primary" type="button">
                                            Wynajmij
                                        </Button>
                                    </Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}