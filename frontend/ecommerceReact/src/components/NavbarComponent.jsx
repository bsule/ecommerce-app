import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Logout from './user/Logout';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import SearchBar from './search/SearchBar';
import CartPic from '../images/icons8-cart-30.png';
import logo from '../images/pngtree-black-and-white-magnetic-capital-letter-e-char-png-image_11306864.png';

function NavbarComponent() {
    const [hover, setHover] = useState(false);
    const location = useLocation();
    const isOnCartPage = location.pathname === '/cart';

    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={NavLink} to="/" className='pt-0'><img src={logo} alt="" className='w-10 mt-1'/></Navbar.Brand>

                <Nav className='justify-content-start flex-grow-1 ml-6'>
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                        <NavDropdown.Item as={NavLink} to='/phones'>Phones</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to='/laptops'>Laptops</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link className='mr-4 ml-4' as={NavLink} to="/savings">Savings</Nav.Link>
                    <Nav.Link className='mr-4' as={NavLink} to='/new-trending'>New & Trending</Nav.Link>
                    <Nav.Link className='mr-4' as={NavLink} to='/best-sellers'>Best Sellers</Nav.Link>

                    <SearchBar/>
                </Nav>
                <Nav>
                    <Logout/>
                    <Nav.Link className='ml-2' as={NavLink} to="/cart" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                        <img src={CartPic} alt="Cart" style={{ height: '24px', opacity: isOnCartPage || hover ? 1 : 0.75, transition: 'opacity 0.3s'}}/>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
