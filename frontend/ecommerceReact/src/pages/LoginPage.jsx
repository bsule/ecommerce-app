import LoadingBarComponent from "../components/LoadingBar";
import Login from "../components/Login";

function LoginPage() {
    const isLoading = false;

    return (
        <div>
            <LoadingBarComponent isLoading={isLoading}/>
            <Login/>
        </div>
    );
}

export default LoginPage;