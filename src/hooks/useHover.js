import { element } from 'prop-types';
import { useState, useEffect, useRef } from 'react';

export default function useHover() {
    const [hovered, setHovered] = useState(false);

    function addHovered() {
        setHovered(true);
    }

    function removeHovered() {
        setHovered(false);
    }

    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        element.addEventListener('mouseenter', addHovered);
        element.addEventListener('mouseleave', removeHovered);

        return function() {
            element.removeEventListener('mouseenter', addHovered);
            element.removeEventListener('mouseleave', removeHovered);
        }
    }, []);

    return [ hovered, elementRef ];
}