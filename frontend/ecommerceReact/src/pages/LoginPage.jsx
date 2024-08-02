import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingBarComponent from "../components/LoadingBar";
import Login from "../components/user/Login";
import { useSelector } from "react-redux";

function LoginPage() {
    const isLoading = false;
    const navigate = useNavigate();
    const accessToken = useSelector((state) => state.token.accessToken);

    useEffect(() => {
        if (accessToken) {
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