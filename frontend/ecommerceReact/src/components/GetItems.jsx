import { useEffect } from "react";
import { useGetItemsQuery } from "../redux/authApis/getItemsApiSlice";

function GetItems() {
    const {data: items, isLoading, error} = useGetItemsQuery();

    useEffect(() => {
        if (isLoading) {
            console.log('loading');
        }
        else {
            console.log(items[0].price);
        }

    }, [isLoading]);
}

export default GetItems;