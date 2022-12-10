import React from 'react';

export default function Image({className, img}) {
    const [hovered, setHovered] = React.useState(false);

    function handleHover() {
        setHovered(prevState => !prevState);
    }

    const heartIcon = hovered && <i className="ri-heart-line favorite"></i>;
    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>;  

    return (
        <div className={`${className} image-container` } onMouseLeave={handleHover} onMouseEnter={handleHover}>
            <img className="image-grid" src={img.url} />
            {heartIcon}
            {cartIcon}
        </div>
    )
}