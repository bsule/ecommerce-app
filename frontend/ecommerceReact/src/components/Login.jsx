import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from '../redux/authApis/loginApiSlice';
import { setCredentials } from "../redux/slices/tokenSlice";


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const [login, { isLoading, error }] = useLoginMutation();
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const user = await login({ username, password }).unwrap();
            console.log('User:', user);
            dispatch(setCredentials({ accessToken: user.access, refreshToken: user.refresh}));
            setUsername('');
            setPassword('');
            navigate('/');
        } 
        catch (err) {
            console.error('Failed to login:', err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' className="border-2 bg-red-500" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type='password' className="border-2" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type='submit' disabled={isLoading} />
        </form>
    );
}

export default Login;