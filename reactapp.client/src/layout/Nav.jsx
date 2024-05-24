import { Container, Nav, Navbar, NavDropdown, Button, Form, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Telephone } from 'react-bootstrap-icons';
export const Navi = () => {
  return (
      <Navbar expand="lg" className="bg-primary">
          <Container fluid>
              <Navbar.Brand>
                  <Link to="/" className="d-block text-white">
                      <Image src="/image/image1.png" className="logo" />
                      CarRent
                  </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                  <Nav
                      className="me-auto my-2 my-lg-0"
                      style={{ maxHeight: '100px' }}
                      navbarScroll
                  >
                      <Nav.Link>
                          <Link to="/" className="d-block text-white">Home</Link>
                      </Nav.Link>
                      <NavDropdown className="text-white" title="Samochody" id="navbarScrollingDropdown">
                          <NavDropdown.Item>
                              <Link to="/towar" className="d-block">Dodawanie samochodu</Link>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                              <Link to="/towary" className="d-block">Samochochody</Link>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="/statystyki">
                              Statystyki
                          </NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown className="text-white" title="Nasza kadra" id="navbarScrollingDropdown">
                          <NavDropdown.Item>
                              <Link to="/pracownik" className="d-block">Dodawanie pracownika</Link>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                              <Link to="/pracownicy" className="d-block">Pracownicy</Link>
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action5">
                              Statystyki
                          </NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link>
                          <Link to="/kontakt" className="d-block text-white">Kontakt</Link>
                      </Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                      <Button variant="outline-light">Zadzwoń <Telephone/></Button>
                  </Form>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  );
}

export default Navi;