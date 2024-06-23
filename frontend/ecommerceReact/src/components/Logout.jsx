import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../redux/authApis/logoutApiSlice";
import { logout as stateLogout } from "../redux/slices/tokenSlice";


function Logout(){
    const [logout, { isLoading, error }] = useLogoutMutation();
    const dispatch = useDispatch();
    
    // let refreshToken = useSelector((state) => state.token.refreshToken);

    const handleClick = async () => {
        await logout().unwrap();
        dispatch(stateLogout());
    };


    return (
        <div>
            <button className="border-2" onClick={handleClick}>Log out</button>
        </div>
    );
}

export default Logout;