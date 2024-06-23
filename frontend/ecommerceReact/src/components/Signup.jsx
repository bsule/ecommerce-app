import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSignupMutation } from "../redux/authApis/signupApiSlice";
import { setCredentials } from "../redux/slices/tokenSlice";
import { getAccessToken } from "../utils/tokenManager";

function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const [signup, { isLoading, error }] = useSignupMutation();
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const user = await signup({ first_name: firstName, last_name: lastName, username, email, password, password2}).unwrap();
            console.log(user);
            dispatch(setCredentials({ accessToken: user.access, refreshToken: user.refresh }));
        }
        catch (err) {
            console.error('Failed to signup', err);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col border-2 bg-gray-100 min-h-screen mt-6 w-60">
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="first name"/>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="last name" />
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                <input type="password" value={password2} onChange={(e) => setPassword2(e.target.value)} placeholder="password" />
                <input type="submit" />
            </form>
        </div>
    );
}

export default Signup;