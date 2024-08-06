import { useEffect } from "react";
import { useViewCartQuery } from "../../redux/cartApis/cartApiSlice";
import LoadingBarComponent from "../LoadingBar";
import RemoveCart from "./RemoveCart";

function ShowCart() {
    const {data, isLoading, error, refetch} = useViewCartQuery();
    
    useEffect(() => {
        refetch();
    }, []);

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

    const itemMap = data?.items?.map(item => (
        <div key={item.id} className="flex">
            <img src={item.item_image} className="w-28 h-28" />
            <div className="ml-4 flex flex-col">
                <p>{item.item_name}</p>
                <p>{item.item_price}</p>
            </div>
            <div className="flex flex-column ml-auto items-end">
                <p>{item.quantity}</p>
                <RemoveCart item={item} refetchCart={refetch}/>
            </div>
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