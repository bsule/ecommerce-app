import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "../redux/authApis/userApiSlice";
import { getAccessToken, getRefreshToken } from "../utils/tokenManager";

function LoginCheck() {
    const { data, error, isLoading } = useGetUserQuery();

    let accessToken = useSelector((state) => state.token.accessToken);

    if (isLoading) {
        return <div>loading</div>;
    }
    if (!accessToken) {
        return <div>Not Logged in</div>;
    }

    return (
        <div>
            <div>{getAccessToken()}</div>
            -----
            <div>{getRefreshToken()}</div>
        </div>
    );
}

export default LoginCheck;