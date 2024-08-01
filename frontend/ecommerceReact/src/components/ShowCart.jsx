import { useViewCartQuery } from "../redux/cartApis/cartApiSlice";
import { getAccessToken } from "../utils/tokenManager";
import LoadingBarComponent from "./LoadingBar";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function ShowCart() {
    const {data, isLoading, error, refetch} = useViewCartQuery();
    
    if (isLoading) {
        return (
            <div>
                <LoadingBarComponent isLoading={isLoading}/>
            </div>
        );
    }


    if (!data) {
        return null;
    }
    // data.items with array of items in cart

    const itemMap = data?.items?.map(item => (
        <div key={item.id}>
            <p>{item.item_name}</p>
            <p>{item.item_price}</p>
        </div>
    ));
    

    return (
        <div>
            <LoadingBarComponent isLoading={isLoading}/>
            {itemMap}
            <br />
            {data.total_price}
        </div>
    );
}

export default ShowCart;