import { useParams } from "react-router-dom";
import { useGetItemByIdQuery } from "../../redux/authApis/getItemsApiSlice";
import LoadingBarComponent from "../LoadingBar";

function ItemDetailPage() {
    const { id } = useParams();
    const { data: item, isLoading, error } = useGetItemByIdQuery(id);
    
    
    return (
        <div>
            <LoadingBarComponent isLoading={isLoading}/>
            {!isLoading && 
            <div>
                <div className="flex flex-row">
                    <div className="flex">
                        <img src={item.image} alt="Error Loading Image" />
                    
                    </div>

                    <div>    
                        <h3>{item.name}</h3>
                        {/* <p>{item.description}</p> */}
                        <p>{item.price}</p>
                    </div>
                </div>
            </div>
        }
        </div>
    );
}

export default ItemDetailPage;