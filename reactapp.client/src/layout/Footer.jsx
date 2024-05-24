import { Container, Row, Col, Image,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram } from 'react-bootstrap-icons';
export const Footer = () => {
    return (
        <Container className="border-top p-4 mt-5">
            <Row>
                <Col className="d-flex align-items-center">
                    <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <Image src="/image/image1.png" className="logo" />
                    </Link>
                    <span className="mb-3 mb-md-0 text-muted">&copy; 2024 CarRent, Inc</span>
                </Col>

                <Col className="nav col-md-4 justify-content-end  d-flex ">
                    <ul className="list-unstyled justify-content-end  d-flex">
                        <li className="ms-3"> <Link to="/" className="text-muted"><Facebook/></Link></li>
                        <li className="ms-3"> <Link to="/" className="text-muted"><Linkedin /></Link></li>
                        <li className="ms-3"> <Link to="/" className="text-muted"><Instagram/></Link></li>
                    </ul>
                </Col>
            </Row>
        </Container>
  );
}

export default Footer;