import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function BuyNow() {
    const navigate = useNavigate();
    
    const handleBuyNow = () => {
        navigate('/buy-now');
    };

    return (
        <div>
            <Button variant="success" onClick={handleBuyNow}>Buy Now</Button>
        </div>
    );
}

export default BuyNow;