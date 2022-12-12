import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

export default function Header() {
    const { cartItems } = useContext(Context);

    const cartIconType = cartItems.length === 0 ? "line" : "fill"; 

    return (
        <header>
            <Link to="/"><h2>Pic Some</h2></Link>
            <Link to="/cart"><i className={`ri-shopping-cart-${cartIconType} ri-fw ri-2x`}></i></Link>
        </header>
    )
}