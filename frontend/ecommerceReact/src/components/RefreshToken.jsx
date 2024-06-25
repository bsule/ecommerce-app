import { useDispatch, useSelector } from "react-redux";
import { useRefreshTokenMutation } from "../redux/authApis/refreshApiSlice";
import { getAccessToken, getRefreshToken } from "../utils/tokenManager";
import { setCredentials } from "../redux/slices/tokenSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RefreshToken() {
    const [newAccessToken, { isLoading, error }] = useRefreshTokenMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let req;

    
    

    return true;
}

export default RefreshToken;