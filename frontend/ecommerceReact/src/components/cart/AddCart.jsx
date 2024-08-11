import { Button } from "react-bootstrap";
import { useAddToCartMutation } from "../../redux/cartApis/cartApiSlice";
import { getAccessToken } from "../../utils/tokenManager";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AddCart({ itemID }) {
    const [addToCart, {data, isLoading, error}] = useAddToCartMutation();
    const navigate = useNavigate();
    const accessToken = getAccessToken();
    const [buttonName, setButtonName] = useState('Add to Cart');
    const [isDisabled, setIsDisabled] = useState(false);
    
    const handleAddToCart = async (event) => {
        event.preventDefault();
        if (!accessToken) {
            navigate('/login');
        }
        else {
            try {
                await addToCart({ item: itemID, quantity: 1 }).unwrap();
                setButtonName('Added');
                setIsDisabled(true);
                setTimeout(() => {
                    setButtonName('Add to Cart');
                    setIsDisabled(false);
                }, 1000);
            }
            catch (error) {}
        }
    };

    return (
        <div>
            <Button variant="primary" onClick={handleAddToCart} disabled={isLoading || isDisabled}>{buttonName}</Button>
        </div>
    );
}

export default AddCart;