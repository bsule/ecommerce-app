import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetUserQuery } from "../redux/authApis/userApiSlice";
import { setCredentials, logout } from "../redux/slices/tokenSlice";
import useRefreshToken from "./RefreshToken";
import { getAccessToken, getRefreshToken } from "../utils/tokenManager";

const LoginCheck = () => {
    const { data, error, isLoading } = useGetUserQuery();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const refreshToken = useRefreshToken();

    useEffect(() => {
        const check = async () => {
            if (isLoading) return;

            try {
                if (data && !error) {
                    const success = await refreshToken();
                    if (success) {
                        if (data.access && data.refresh) {
                            dispatch(setCredentials({ accessToken: data.access, refreshToken: data.refresh}));
                        }
                        console.log(getAccessToken());
                        console.log(getRefreshToken());
                        navigate('/');
                    }
                } else {
                    const tryRefresh = await refreshToken();
    
                    if (tryRefresh) {
                        navigate('/');
                    } else {
                        dispatch(logout());
                    }
                }
            }
            catch (e) {}
            
            
        };
            check();
    }, [navigate, dispatch, isLoading]);
};

export default LoginCheck;
