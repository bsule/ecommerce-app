import { useViewCartQuery } from "../redux/cartApis/cartApiSlice";
import LoadingBarComponent from "./LoadingBar";
import LoginCheck from "./LoginCheck";

function ShowCart() {
    const {data, isLoading, error} = useViewCartQuery();

    if (isLoading) {
        return (
            <div>
                <LoadingBarComponent isLoading={isLoading}/>
            </div>
        );
    }

    console.log(data);

    // data.items with array of items in cart

    // const itemMap = data.map(item => (
    //     <div key={item.id}>
    //         <p>{item.name}</p>
    //     </div>
    // ));

    return (
        <div>
            <LoadingBarComponent isLoading={isLoading}/>
            {data.id}
        </div>
    );
}

export default ShowCart;