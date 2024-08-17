import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function BuyNow() {
    const navigate = useNavigate();
    
    const handleBuyNow = () => {
        navigate('/buy-now');
    };

    return (
        <div className="flex justify-center mt-2 mb-5">
            <Button variant="success" onClick={handleBuyNow}>Buy Now</Button>
        </div>
    );
}

export default BuyNow;