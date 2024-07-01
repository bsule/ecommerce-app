import { Link } from "react-router-dom";
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
            <Link to={`/items/${item.id}`} className="relative bg-cover bg-center p-4 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                <div className="relative z-10 flex flex-col items-center text-white">
                    <img src={item.image} alt="Failed to load image" className="w-21 h-21"/>
                    <h4>{item.name}</h4>
                    <p>{item.price}</p>
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