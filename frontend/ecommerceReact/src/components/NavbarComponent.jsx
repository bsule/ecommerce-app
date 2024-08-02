import Logout from './user/Logout';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavbarComponent() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Navbar</Navbar.Brand>

                <Nav className="m-auto">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>

                    <Nav.Link as={NavLink} to="/cart">Cart</Nav.Link>
                </Nav>
                <Nav>
                    <Logout/>
                </Nav>
            </Container>
        </Navbar>
      );
}

export default NavbarComponent;