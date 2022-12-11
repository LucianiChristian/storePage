import React from 'react';
import PropTypes from 'prop-types';
import { Context } from '../Context';

export default function Image({className, img}) {
    const [hovered, setHovered] = React.useState(false);
    const { toggleFavorite, cartItems, addCartItem } = React.useContext(Context);

    function handleHover() {
        setHovered(prevState => !prevState);
    }

    function heartIcon() {
        if(img.isFavorite) {
            return (
                <i 
                    className={`ri-heart-fill favorite`} 
                    onClick={() => toggleFavorite(img.id)}
                ></i>
            )   
        }
        else if(hovered) {
            return (
                <i 
                    className={`ri-heart-line favorite`} 
                    onClick={() => toggleFavorite(img.id)}
                ></i>
            )
        }
    }
    function cartIcon() {
        const inCart = cartItems.some(item => item.id === img.id);

        if(inCart) {
            return (
                <i className={`ri-shopping-cart-fill cart`}></i>
            )   
        }
        else if(hovered) {
            return (
                <i 
                    className="ri-add-circle-line cart" 
                    onClick={() => addCartItem(img)}
                ></i>
            )
        }
    } 

    return (
        <div className={`${className} image-container` } onMouseLeave={handleHover} onMouseEnter={handleHover}>
            <img className="image-grid" src={img.url} />
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool,
    }),
};