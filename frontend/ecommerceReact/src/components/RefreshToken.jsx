import { useDispatch, useSelector } from "react-redux";
import { useRefreshTokenMutation } from "../redux/authApis/refreshApiSlice";
import { getAccessToken, getRefreshToken } from "../utils/tokenManager";
import { setCredentials } from "../redux/slices/tokenSlice";

function RefreshToken() {
    const [newAccessToken, { isLoading, error }] = useRefreshTokenMutation();
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        const req = await newAccessToken(getRefreshToken());
        dispatch(setCredentials({ accessToken: req.access, accessToken: req.refresh }));
    };

    return (
        <div>
            <input type="submit" onClick={handleSubmit}/>
            <div>{getRefreshToken()}</div>

            <div>{getAccessToken()}</div>
        </div>
    );
}

export default RefreshToken;