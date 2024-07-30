import LoadingBarComponent from "../components/LoadingBar";
import { useNavigate } from "react-router-dom";
import ShowCart from "../components/ShowCart";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAccessToken } from "../utils/tokenManager";

function CartPage() {
    const isLoading = false;
    const navigate = useNavigate();
    const accessToken = getAccessToken();

    useEffect(() => {
        console.log(accessToken);
        if (!accessToken) {
            navigate('/login');
        }
    });

    return (
        <div>
            <LoadingBarComponent isLoading={isLoading}/>
            <ShowCart/>
        </div>
    );
}

export default CartPage;