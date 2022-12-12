import { useContext } from "react";
import { Context } from "../Context";

export default function CartItem({item}) {
    const { removeCartItem } = useContext(Context);

    return (
        <div className="cartItem">
            <div className="cartItem-iconImageContainer">
                <i 
                    className="ri-delete-bin-line"
                    onClick={() => removeCartItem(item.id)}
                ></i>
                <img className="cartItem-image" src={item.url}/>
            </div>
            <p className="cartItem-price">$5.00</p>
        </div>
    )
}