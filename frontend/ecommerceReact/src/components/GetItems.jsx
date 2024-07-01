import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { useGetItemsQuery } from "../redux/authApis/getItemsApiSlice";

function GetItems() {
    const {data, isLoading, error} = useGetItemsQuery();

    if (isLoading) {
        return (
            <div>
                Loading...
            </div>
        );
    }

    // const filteredItems = data.filter(item => item.category === 1);

    const pictureMap = data.map(item => (
        <div key={item.id} className="flex mt-10">
            <Link to={`/items/${item.id}`} className="relative bg-cover bg-center rounded-lg overflow-hidden w-[250px] h-[280px]">
                <div className="absolute inset-0 z-0"></div>
                <div className="relative z-10 flex flex-col text-black w-full text-pretty">
                    <div className="flex justify-center items-center w-full h-full">
                        <img src={item.image} alt="Failed to load image" className="w-[200px] h-[200px]" />
                    </div>
                    <h4 className="font-bold">{item.name}</h4>
                    <p>{item.price}</p>
                    <Button variant="primary">Add to Cart</Button>
                </div>
            </Link>
        </div>
    ));


    return (
        <div>
            {pictureMap}
        </div>
    );
}

export default GetItems;