import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useGetItemsQuery } from "../../redux/authApis/getItemsApiSlice";

function SearchBar() {
    const { data: items, isLoading, error } = useGetItemsQuery();
    const [searchItem, setSearchItem] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);

    const filteredItems = items?.filter((item) => item.name.toLowerCase().includes(searchItem.toLowerCase())).slice(0, 5);

    const handleItemClick = () => {
        setIsFocused(false);
        
        inputRef.current.blur();
        
    };

    return (
        <div className="relative w-96">
            <input
                type="text"
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="bg-white w-full rounded-lg px-2 py-1 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Search items..."
            />
            {isFocused && searchItem && (
                <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50" onMouseDown={(e) => e.preventDefault()}>
                    {filteredItems && filteredItems.length > 0 ? (
                        filteredItems.map((item) => (
                            <Link to={`/items/${item.id}`} onClick={handleItemClick}>
                                <div key={item.id} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    {item.name}
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="px-4 py-2 text-gray-500">No matching items found.</div>
                    )}
                </div>
            )}
        </div>
    );
}

export default SearchBar;