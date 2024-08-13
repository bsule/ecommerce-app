import { useRemoveFromCartMutation } from "../../redux/cartApis/cartApiSlice";
import { Button } from "react-bootstrap"; 


function RemoveCart({ item, refetchCart }) {
    const [removeFromCart, {data, isLoading, error}] = useRemoveFromCartMutation();

    const handleRemove = async () => {
        try {
            await removeFromCart({item: item.item});
            refetchCart();
        }
        catch (error) {}
    };

    return (
        <div>
            <Button variant="danger" onClick={handleRemove} disabled={isLoading}>Remove</Button>
        </div>
    );
}

export default RemoveCart;