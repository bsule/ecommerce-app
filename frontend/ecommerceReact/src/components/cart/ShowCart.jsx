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
        <div key={item.id} className="flex mb-4 w-[700px]">
            <img src={item.item_image} className="w-28 h-28" />
            <div className="ml-4 flex flex-col">
                <p>{item.item_name}</p>
                <p>{item.item_price}</p>
            </div>
            <div className="flex flex-column ml-auto items-end">
                <p className="mb-2">Quantity: {item.quantity}</p>
                <RemoveCart item={item} refetchCart={refetch}/>
            </div>
        </div>
    ));
    

    return (
        <div>
            <LoadingBarComponent isLoading={isLoading}/>
            <div className="flex justify-center flex-col items-center">
                {itemMap}
            </div>
            <br />
            <h3 className="flex justify-content-center text-lg font-semibold">${data.total_price}</h3>
        </div>
    );
}

export default ShowCart;