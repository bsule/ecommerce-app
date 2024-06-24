import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom'; // 
import userImage from '../pics/user.png';

function NavbarComponent() {
    const location = useLocation();

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
                    <Nav.Link as={NavLink} to="/signup">fd</Nav.Link>
                    {/* {location.pathname === '/signup' && (
                        <Link to="/contact">
                            <Nav.Link>Contact</Nav.Link>
                        </Link>
                    )} */}
                </Nav>
            </Container>
        </Navbar>
      );
}

export default NavbarComponent;