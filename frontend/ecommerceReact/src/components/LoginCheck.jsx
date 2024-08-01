import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetUserQuery } from "../redux/authApis/userApiSlice";
import { logout } from "../redux/slices/tokenSlice";
import useRefreshToken from "./RefreshToken";
import { clearTokens } from "../utils/tokenManager";

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
                    }
                } else {
                    const tryRefresh = await refreshToken();
    
                    if (!tryRefresh) {
                        dispatch(logout());
                        clearTokens();
                    }
                }
            }
            catch (e) {}
        };
        check();
    }, [dispatch, isLoading]);
};

export default LoginCheck;