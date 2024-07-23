import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingBarComponent from "../components/LoadingBar";
import { getAccessToken } from "../utils/tokenManager";
import Login from "../components/Login";

function LoginPage() {
    const isLoading = false;
    const navigate = useNavigate();

    useEffect(() => {
        if (getAccessToken()) {
            navigate('/');
        }
    });

    return (
        <div>
            <LoadingBarComponent isLoading={isLoading}/>
            <Login/>
        </div>
    );
}

export default LoginPage;