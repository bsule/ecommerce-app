import { useNavigate } from "react-router-dom";
import LoadingBarComponent from "../components/LoadingBar";
import Signup from "../components/Signup";
import { getAccessToken } from "../utils/tokenManager";
import { useEffect } from "react";

function SignupPage() {
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
            <Signup/>
        </div>
    );
}

export default SignupPage;