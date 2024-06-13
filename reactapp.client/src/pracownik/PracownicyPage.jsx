import { Container, Row, Col, Card } from 'react-bootstrap';
export const Pracownicy = () => {
    const employees = [
        { id: 1, name: 'Jan Kowalski', position: 'Kierownik', description: 'Zarządca z wieloletnim doświadczeniem w branży.', img: '/image/person1.png' },
        { id: 2, name: 'Anna Nowak', position: 'Specjalista ds. obsługi klienta', description: 'Ekspertka w obszarze obsługi klienta, z pasją do rozwiązywania problemów.', img: '/image/person5.png' },
        { id: 3, name: 'Piotr Wiśniewski', position: 'Mechanik', description: 'Zawodowiec zajmujący się naprawą i konserwacją pojazdów.', img: '/image/person2.png' },
        { id: 4, name: 'Maria Lewandowska', position: 'Księgowa', description: 'Dokładna i odpowiedzialna specjalistka ds. finansów.', img: '/image/person6.png' },
        { id: 5, name: 'Tomasz Nowicki', position: 'Sprzedawca', description: 'Zawsze uśmiechnięty i komunikatywny.', img: '/image/person3.png' },
        { id: 6, name: 'Ewa Dąbrowska', position: 'Recepcjonistka', description: 'Punktualna i pomocna. Wszędzie się odnajdzie', img: '/image/person7.png' },
        { id: 7, name: 'Marek Szymański', position: 'Magazynier', description: 'Organizowany i sprawnie zarządzający zapasami.', img: '/image/person4.png' },
        { id: 8, name: 'Katarzyna Wójcik', position: 'Marketingowiec', description: 'Kreatywna i z pasją promująca naszą firmę.', img: '/image/person8.png' },
    ];

    return (
        <Container fluid className="m-5">
            <h1 className="border-bottom p-3">Nasza kadra</h1>
            <Row>
                {employees.map((employee) => (
                    <Col key={employee.id} xs={12} sm={6} md={4} lg={3}>
                        <Card className="mb-4">
                            <Card.Img variant="top" src={employee.img} />
                            <Card.Body>
                                <Card.Title>{employee.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{employee.position}</Card.Subtitle>
                                <Card.Text>
                                    {employee.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}