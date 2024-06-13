import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer.jsx';
import { Navi } from './Nav.jsx';
import Faq from './Faq.jsx';
export function Layout() {
    return (
        <div className="App min-vh-100 justify-content-center align-items-center bg-dark" data-bs-theme="dark">
            <Navi/>
                <Container className="text-light">
                    <Outlet />
                <Footer />
                <Faq />
            </Container>
        </div>

    )
}