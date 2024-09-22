import { useGetItemsQuery } from "../../redux/authApis/getItemsApiSlice";

function Savings(){
    const {data, isLoading, error} = useGetItemsQuery();

    if (isLoading) {
        return (
            <div>
                <LoadingBarComponent isLoading={isLoading}/>
            </div>
        );
    }

    
}

export default Savings;