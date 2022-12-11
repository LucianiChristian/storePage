import React from 'react';
import { PhotosContext } from '../contexts/PhotosContext';

export default function Image({className, img}) {
    const [hovered, setHovered] = React.useState(false);
    const { toggleFavorite } = React.useContext(PhotosContext);

    function handleHover() {
        setHovered(prevState => !prevState);
    }

    const heartType = img.isFavorite ? "fill" : "line";
    const heartHovered = hovered && 
        <i className={`ri-heart-${heartType} favorite`} onClick={() => toggleFavorite(img.id)}></i>;
    const cartHovered = hovered && <i className="ri-add-circle-line cart"></i>;  

    return (
        <div className={`${className} image-container` } onMouseLeave={handleHover} onMouseEnter={handleHover}>
            <img className="image-grid" src={img.url} />
            {heartHovered}
            {cartHovered}
        </div>
    )
}