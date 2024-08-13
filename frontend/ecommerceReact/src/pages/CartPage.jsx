import LoadingBarComponent from "../components/LoadingBar";
import { useNavigate } from "react-router-dom";
import ShowCart from "../components/cart/ShowCart";
import { useEffect } from "react";
import { getAccessToken } from "../utils/tokenManager";
import BuyNow from "../components/cart/BuyNow";

function CartPage() {
    const isLoading = false;
    const navigate = useNavigate();
    const accessToken = getAccessToken();

    useEffect(() => {
        if (!accessToken) {
            navigate('/login');
        }
    });

    return (
        <div className="flex flex-column">
            <LoadingBarComponent isLoading={isLoading}/>
            <div className="mt-5">
                <ShowCart/>
                <BuyNow />
            </div>
        </div>
    );
}

export default CartPage;