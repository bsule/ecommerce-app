import LoadingBarComponent from "../components/LoadingBar";
import Signup from "../components/Signup";

function SignupPage() {
    const isLoading = false;

    return (
        <div>
            <LoadingBarComponent isLoading={isLoading}/>
            <Signup/>
        </div>
    );
}

export default SignupPage;