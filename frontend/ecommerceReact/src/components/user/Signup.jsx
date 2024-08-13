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
            dispatch(setCredentials({ accessToken: user.access, refreshToken: user.refresh }));
            navigate('/login');
        }
        catch (err) {
        }
    };

    return (
        <div className="flex flex-col items-center justify-center mt-20">
            <h2 className="text-2xl mb-8 font-bold">Signup</h2>
            <Form onSubmit={handleSubmit} className="flex flex-col min-w-96">
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="border-gray-400"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="border-gray-400"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="border-gray-400"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="Email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border-gray-400"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border-gray-400"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="password" placeholder="Confirm Password" value={password2} onChange={(e) => setPassword2(e.target.value)} className="border-gray-400"/>
                </Form.Group>

                <Button variant="primary" type="submit" disabled={isLoading}>
                    Signup
                </Button>
            </Form>
        </div>
    );
}

export default Signup;