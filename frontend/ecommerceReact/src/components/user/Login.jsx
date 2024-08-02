import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { useLoginMutation } from '../../redux/authApis/loginApiSlice';
import { setCredentials } from "../../redux/slices/tokenSlice";
import LoginCheck from "./LoginCheck";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const [login, { isLoading, error }] = useLoginMutation();
    const navigate = useNavigate();

    LoginCheck();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const user = await login({ username, password }).unwrap();
            dispatch(setCredentials({ accessToken: user.access, refreshToken: user.refresh}));
            setUsername('');
            setPassword('');
            navigate('/');
        } 
        catch (err) {}
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={isLoading}>
                Login
            </Button>
        </Form>
    );
}

export default Login;