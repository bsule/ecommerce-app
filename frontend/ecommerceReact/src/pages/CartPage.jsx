import { useNavigate } from "react-router-dom";
import ShowCart from "../components/ShowCart";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAccessToken } from "../utils/tokenManager";

function CartPage() {
    const navigate = useNavigate();
    const accessToken = useSelector((state) => state.token.accessToken);
    console.log(accessToken);

    useEffect(() => {
        if(!accessToken) {
            navigate('/login');
        }
    }, []);

    return (
        <div>
            <ShowCart/>
        </div>
    );
}

export default CartPage;