import RefreshToken from "./RefreshToken";
import { useGetUserQuery } from "../redux/authApis/userApiSlice";
import { getAccessToken, getRefreshToken } from "../utils/tokenManager";

function LoginCheck() {
    const { data, error, isLoading } = useGetUserQuery();

    let accessToken = getAccessToken();

    if (isLoading) {
        return <div>loading</div>;
    }

    if (!accessToken) {
        console.log("not logged in");
        const tryRefresh = RefreshToken();

        if(tryRefresh) {
            return true;
        }

        return false;
    }

    console.log("logged in");

    return true;
}

export default LoginCheck;