import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSignupMutation } from "../../redux/authApis/signupApiSlice";
import { setCredentials } from "../../redux/slices/tokenSlice";
import LoginCheck from "./LoginCheck";

function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const [signup, { isLoading, error }] = useSignupMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    LoginCheck();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const user = await signup({ first_name: firstName, last_name: lastName, username, email, password, password2}).unwrap();
            console.log(user);
            dispatch(setCredentials({ accessToken: user.access, refreshToken: user.refresh }));
            navigate('/login');
        }
        catch (err) {
            console.error('Failed to signup', err);
        }
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="Email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password again</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password2} onChange={(e) => setPassword2(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={isLoading}>
                    Signup
                </Button>
            </Form>
        </div>
    );
}

export default Signup;