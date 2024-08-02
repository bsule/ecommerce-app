import { Button } from "react-bootstrap";
import { useAddToCartMutation } from "../../redux/cartApis/cartApiSlice";
import { getAccessToken } from "../../utils/tokenManager";
import { useNavigate } from "react-router-dom";

function AddCart({ itemID }) {
    const [addToCart, {data, isLoading, error}] = useAddToCartMutation();
    const navigate = useNavigate();
    const accessToken = getAccessToken();
    
    const handleAddToCart = async (event) => {
        event.preventDefault();
        if (!accessToken) {
            navigate('/login');
        }
        else {

            try {
                await addToCart({ item: itemID, quantity: 1 }).unwrap();
                console.log('Item added to cart');
            }
            catch (error) {
                console.error('Failed to add item to cart:', error);
            }
        }
    };


    return (
        <div>
            <Button variant="primary" onClick={handleAddToCart} disabled={isLoading}>Add to Cart</Button>
        </div>
    );
}

export default AddCart;