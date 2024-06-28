import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom'; // 
import { useDispatch, useSelector } from 'react-redux';
import userImage from '../pics/user.png';
import Logout from './Logout';

function NavbarComponent() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Navbar</Navbar.Brand>

                <Nav className="m-auto">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>

                    <Nav.Link as={NavLink} to="/signup">Signup</Nav.Link>

                    <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                </Nav>
                <Nav>
                    <Logout/>
                </Nav>
            </Container>
        </Navbar>
      );
}

export default NavbarComponent;