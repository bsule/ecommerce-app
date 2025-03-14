import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { useLogoutMutation } from '../../redux/authApis/logoutApiSlice';
import { logout as stateLogout } from '../../redux/slices/tokenSlice';

const NavigationMenu = () => {
    const [logout] = useLogoutMutation();
    const dispatch = useDispatch();
    const accessToken = useSelector((state) => state.token.accessToken);

    const handleLogout = async () => {
        try {
            await logout().unwrap();
            dispatch(stateLogout());
            window.location.reload();
        }
        catch (error) {}
    };


    let titleAcc = 'Sign in';

    if (accessToken) {
        titleAcc = 'Account';
    }


    return (
        <NavDropdown title={titleAcc} id="collapsible-nav-dropdown">
            {!accessToken ? (
                <>
                    <div style={{ padding: '0px 16px 10px 16px', fontWeight: 'bold' }}>Account</div>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={NavLink} to="/login">
                        Login
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/signup">
                        Signup
                    </NavDropdown.Item>
                </>
            ) : (
                <>
                    <div style={{ padding: '0px 16px 10px 16px', fontWeight: 'bold' }}>Account</div>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleLogout}>
                        Logout
                    </NavDropdown.Item>
                </>
            )}
        </NavDropdown>
    );
};

export default NavigationMenu;
