import { useParams } from "react-router-dom";
import { useGetItemByIdQuery } from "../../redux/authApis/getItemsApiSlice";
import LoadingBarComponent from "../LoadingBar";
import StarRating from "./StarRating";
import AddCart from "../cart/AddCart";

function ItemDetailPage() {
    const { id } = useParams();
    const { data: item, isLoading, error } = useGetItemByIdQuery(id);
    
    return (
        <div className="flex flex-col mt-20">
            <LoadingBarComponent isLoading={isLoading}/>
            {!isLoading && 
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row">
                    <div className="flex mr-10">
                        <img src={item.image} alt="Error Loading Image" className="w-[500px] h-[500px]" />
                    </div>

                    <div className="flex flex-col max-w-lg mt-20">    
                        <h3 className="text-xl font-bold">{item.name}</h3>
                        <StarRating rating={item.review_avg} total_reviews={item.total_reviews}/>
                        <p className="font-bold">${item.price}</p>
                        <p className="mt-2">{item.description}</p>
                        <div className="mt-3">
                            <AddCart itemID={item.id}/>
                        </div>
                    </div>
                </div>
            </div>
        }
        </div>
    );
}

export default ItemDetailPage;