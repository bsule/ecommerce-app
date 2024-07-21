import { Button } from "react-bootstrap";
import { useAddToCartMutation } from "../redux/cartApis/cartApiSlice";

function AddCart({ itemID }) {
    const [addToCart, {data, isLoading, error}] = useAddToCartMutation({item: itemID, quantity: 1});


    return (
        <div>
            <Button variant="primary" onClick={addToCart}>Add to Cart</Button>
            <p>{itemID}</p>
        </div>
    );
}

export default AddCart;