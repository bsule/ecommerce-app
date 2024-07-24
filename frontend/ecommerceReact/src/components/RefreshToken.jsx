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
            console.log(req);
            dispatch(setCredentials({ accessToken: req.access, refreshToken: req.refresh }));
            return true;
        } 
        catch (error) {
            return false;
        }
    };

    return refresh;
};

export default useRefreshToken;
