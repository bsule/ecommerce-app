import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import AddCart from "./AddCart";
import StarRating from "./StarRating";
import { useGetItemsQuery } from "../redux/authApis/getItemsApiSlice";
import LoadingBarComponent from "./LoadingBar";

function GetItems() {
    const {data, isLoading, error} = useGetItemsQuery();

    if (isLoading) {
        return (
            <div>
                <LoadingBarComponent isLoading={isLoading}/>
            </div>
        );
    }

    // const filteredItems = data.filter(item => item.category === 1);

    const pictureMap = data.map(item => (
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
                    {/* <Button variant="primary">Add to Cart</Button> */}
                    <AddCart itemID={item.id}/>
                </div>
            </Link>
        </div>
    ));


    return (
        <div>
            <LoadingBarComponent isLoading={isLoading}/>
            <div className="flex flex-row flex-wrap justify-content-center">
                {pictureMap}
            </div>
        </div>
    );
}

export default GetItems;