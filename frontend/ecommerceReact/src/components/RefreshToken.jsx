import { useDispatch } from "react-redux";
import { useRefreshTokenMutation } from "../redux/authApis/refreshApiSlice";
import { getRefreshToken } from "../utils/tokenManager";
import { setCredentials } from "../redux/slices/tokenSlice";

const useRefreshToken = () => {
    const dispatch = useDispatch();
    const [refreshTokenMutation] = useRefreshTokenMutation();

    const refresh = async () => {
        const refreshToken = getRefreshToken();
        if (!refreshToken) {
            return false;
        }

        try {
            const req = await refreshTokenMutation(refreshToken).unwrap();
            dispatch(setCredentials({ accessToken: req.access, refreshToken: req.refresh }));
            console.log("Token refreshed successfully");
            return true;
        } catch (error) {
            console.error('Failed to refresh token:', error);
            return false;
        }
    };

    return refresh;
};

export default useRefreshToken;
