import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetUserQuery } from "../redux/authApis/userApiSlice";
import { getAccessToken } from "../utils/tokenManager";
import { logout } from "../redux/slices/tokenSlice";
import useRefreshToken from "./RefreshToken";

const LoginCheck = () => {
    const { data, error, isLoading } = useGetUserQuery();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const refreshToken = useRefreshToken();

    useEffect(() => {
        const check = async () => {
            const accessToken = getAccessToken();

            if (accessToken) {
                console.log('logged in');
                const success = await refreshToken();
                if (success) {
                    navigate('/');
                }
            } else {
                console.log("not logged in");
                const tryRefresh = await refreshToken();

                if (tryRefresh) {
                    navigate('/');
                } else {
                    dispatch(logout());
                }
            }
        };
        check();
    }, [navigate, dispatch]);

    return null;
};

export default LoginCheck;
