import { useViewCartQuery } from "../redux/cartApis/cartApiSlice";
import LoginCheck from "./LoginCheck";

function ShowCart() {
    const {data: items, isLoading, error} = useViewCartQuery();


    return (
        <div>
            cart
        </div>
    );
}

export default ShowCart;