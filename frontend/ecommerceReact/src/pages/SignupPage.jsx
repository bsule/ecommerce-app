import { useNavigate } from "react-router-dom";
import LoadingBarComponent from "../components/LoadingBar";
import Signup from "../components/user/Signup";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function SignupPage() {
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
            <Signup/>
        </div>
    );
}

export default SignupPage;