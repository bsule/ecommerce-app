import { useViewCartQuery } from "../../redux/cartApis/cartApiSlice";
import LoadingBarComponent from "../LoadingBar";

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
    console.log(data);
    // data.items with array of items in cart

    const itemMap = data?.items?.map(item => (
        <div key={item.id} className="flex">
            <img src={item.item_image} className="w-20 h-20" />
            <p>{item.item_name}</p>
            <p>{item.item_price}</p>
            <div className="flex flex-column ml-5">
                <p>{item.quantity}</p>
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