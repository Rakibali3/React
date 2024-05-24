import { useDispatch, useSelector } from "react-redux";
import ItemData from "./ItemData";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);

    const dispatch = useDispatch();

    const handleCart = ()=>{
            dispatch(clearCart());
    }

    return (
        <div className=" m-4 p-4">
            <div className="w-6/12 m-auto">
                <h1 className="text-center font-bold text-2xl">Cart</h1>
                <div className="flex justify-center">
                <button className="bg-black text-white p-1 m-2 rounded-md w-24 " onClick={handleCart}>Clear Cart</button>
                </div>
            <ItemData items={cartItems}/>
            </div>
        </div>
    );
};

export default Cart;
