import { Button } from "react-bootstrap";
import { useAddToCartMutation } from "../redux/cartApis/cartApiSlice";

function AddCart({ itemID }) {
    const [addToCart, {data, isLoading, error}] = useAddToCartMutation();

    const handleAddToCart = async (event) => {
        event.preventDefault();
        try {
            await addToCart({ item: itemID, quantity: 1 }).unwrap();
            console.log('Item added to cart');
        }
        catch (error) {
            console.error('Failed to add item to cart:', error);
        }
    };


    return (
        <div>
            <Button variant="primary" onClick={handleAddToCart} disabled={isLoading}>Add to Cart</Button>
            <p>{itemID}</p>
        </div>
    );
}

export default AddCart;