import { useContext, useState } from "react";
import { Context } from "../Context";

export default function CartItem({item}) {
    const { removeCartItem } = useContext(Context);

    const [deleteIconHover, setDeleteIconHover] = useState(false);
    const deleteIconType = deleteIconHover ? "fill" : "line";

    return (
        <div className="cartItem">
            <div className="cartItem-iconImageContainer">
                <div 
                    className="deleteIconContainer"
                    onMouseEnter={() => setDeleteIconHover(true)}
                    onMouseLeave={() => setDeleteIconHover(false)}
                >
                    <i className={`ri-delete-bin-${deleteIconType}`} onClick={() => removeCartItem(item.id)}></i>
                </div>
                <img className="cartItem-image" src={item.url}/>
            </div>
            <p className="cartItem-price">$5.00</p>
        </div>
    )
}