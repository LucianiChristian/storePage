import { useContext } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

export default function Cart() {
    const { cartItems, cartTotal } = useContext(Context);
    const cartItemElements = cartItems.map(item => <CartItem key={item.id} item={item}/>);

    return (
        <main className="cartPage">
            <h1>My Cart</h1>
            <div className="cartItemsContainer">
                {cartItemElements}
                <p className="cartItems-cost">Total Cost: {cartTotal.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
            </div>
            <div className="cartPage-placeOrderBtnContainer">
                <button className="cartPage-placeOrderBtn">Place Order</button>
            </div>
        </main>
    )
}