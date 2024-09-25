import { useGetItemsQuery } from "../redux/authApis/getItemsApiSlice";
import LoadingBarComponent from "../components/LoadingBar";
import { Link } from "react-router-dom";
import StarRating from "../components/items/StarRating";
import AddCart from "../components/cart/AddCart";

function BestSellerPage(){
    const {data, isLoading, error} = useGetItemsQuery();

    if (isLoading) {
        return (
            <div>
                <LoadingBarComponent isLoading={isLoading}/>
            </div>
        );
    }

    const savingsIds = [1, 4, 8, 13, 14, 15, 17]
    
    const filteredItems = data?.filter(item => savingsIds.includes(item.id));
    console.log(data);

    return (
        <div className="flex flex-row flex-wrap justify-content-center">
            <LoadingBarComponent isLoading={isLoading}/>
            {filteredItems?.length > 0 ? (
                filteredItems.map(item => (
                    <div key={item.id} className="flex mt-10 mr-1 ml-1">
                        <Link to={`/items/${item.id}`} className="relative bg-cover bg-center rounded-lg overflow-hidden w-[250px]">
                            <div className="absolute inset-0 z-0"></div>
                            <div className="relative z-10 flex flex-col text-black w-full text-pretty">
                                <div className="flex justify-center items-center w-full h-full">
                                    <img src={item.image} alt="Failed to load image" className="w-[200px] h-[200px]" />
                                </div>
                                <h4 className="font-bold">{item.name}</h4>
                                <p className="text-green-500">{item.price}</p>
                                <StarRating rating={item.review_avg} total_reviews={item.total_reviews}/>
                                <AddCart itemID={item.id}/>
                            </div>
                        </Link>
                    </div>
                ))
            ) : (
                <p>No items found</p>
            )
            }
        </div>
    );
}

export default BestSellerPage;