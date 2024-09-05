import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Logout from './user/Logout';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import SearchBar from './search/SearchBar';
import CartPic from '../images/icons8-cart-30.png';

function NavbarComponent() {
    const [hover, setHover] = useState(false);
    const location = useLocation();
    const isOnCartPage = location.pathname === '/cart';

    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={NavLink} to="/" className='pt-0'>Shop</Navbar.Brand>

                <Nav className='justify-content-start flex-grow-1 ml-6'>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item>Something</NavDropdown.Item>
                        <NavDropdown.Item>
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Dropdown" className='mr-4 ml-4' id="basic-nav-dropdown">
                        <NavDropdown.Item>Something</NavDropdown.Item>
                        <NavDropdown.Item>
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link className='mr-4'>New & Trending</Nav.Link>
                    <Nav.Link className='mr-4'>New & Trending</Nav.Link>

                    <SearchBar/>
                </Nav>
                <Nav>
                    <Logout/>
                    <Nav.Link as={NavLink} to="/cart" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                        <img src={CartPic} alt="Cart" style={{ height: '24px', opacity: isOnCartPage || hover ? 1 : 0.75, transition: 'opacity 0.3s'}}/>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
