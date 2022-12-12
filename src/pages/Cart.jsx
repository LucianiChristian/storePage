import { useContext, useState } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

export default function Cart() {
    const { cartItems, cartTotal, emptyCart } = useContext(Context);
    const cartItemElements = cartItems.map(item => <CartItem key={item.id} item={item}/>);

    const totalCostString = cartTotal.toLocaleString("en-US", {style: "currency", currency: "USD"});

    const [buttonText, setButtonText] = useState("Place Order"); 

    function placeOrder() {
        setButtonText("Ordering...");

        setTimeout(() => {
            emptyCart();
            setButtonText("Place Order");
        }, 3000);
    }

    return (
        <main className="cartPage">
            <h1>My Cart</h1>
            <div className="cartItemsContainer">
                {cartItemElements}
                <p className="cartItems-cost">Total Cost: {totalCostString}</p>
            </div>
            <div className="cartPage-placeOrderBtnContainer">
                <button 
                    className="cartPage-placeOrderBtn"
                    onClick={ placeOrder }
                >{buttonText}</button>
            </div>
        </main>
    )
}