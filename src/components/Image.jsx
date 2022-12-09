import React from 'react';

export default function Image({className, img}) {
    return (
        <div className={`${className} image-container`}>
            <img className="image-grid" src={img.url}/>
        </div>
    )
}