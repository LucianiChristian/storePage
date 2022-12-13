import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { Context } from "../Context";
import useHover from "../hooks/useHover";

function CartItem({item}) {
    const { removeCartItem } = useContext(Context);

    const [ hovered, hoveredRef ] = useHover();

    const deleteIconType = hovered ? "fill" : "line";

    return (
        <div className="cartItem">
            <div className="cartItem-iconImageContainer">
                <div className="deleteIconContainer" ref={hoveredRef}>
                    <i className={`ri-delete-bin-${deleteIconType}`} onClick={() => removeCartItem(item.id)}></i>
                </div>
                <img className="cartItem-image" src={item.url}/>
            </div>
            <p className="cartItem-price">$5.00</p>
        </div>
    )
}

CartItem.proptypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired,
    }),
};

export default CartItem;