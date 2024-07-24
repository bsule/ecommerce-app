import { useDispatch } from "react-redux";
import { useRefreshTokenMutation } from "../redux/authApis/refreshApiSlice";
import { getRefreshToken } from "../utils/tokenManager";
import { setCredentials } from "../redux/slices/tokenSlice";
import { useSelector } from "react-redux";

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
            const accessToken1 = useSelector((state) => state.token.accessToken);
            console.log(accessToken1);
            return true;
        } 
        catch (error) {
            return false;
        }
    };

    return refresh;
};

export default useRefreshToken;
