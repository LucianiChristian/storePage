import { createContext, useEffect, useState } from 'react';

const Context = createContext();

function ContextProvider({children}) {
    const [photos, setPhotos] = useState([]);    
    function toggleFavorite(id) {
        setPhotos(prevPhotos => prevPhotos.map(photo => {
            return photo.id === id ? {...photo, isFavorite: !photo.isFavorite} : photo
        }));
    }
    
    const [cartItems, setCartItems] = useState([]);
    function addCartItem(item) {
        setCartItems(prevCartItems => [...prevCartItems, item]);
    }
    function removeCartItem(id) {
        setCartItems(prevCartItems => prevCartItems.filter(cartItem => !(id === cartItem.id)));
    }

    const [cartTotal, setCartTotal] = useState(0);
    const ITEM_PRICE = 5;
    useEffect(() => {
        setCartTotal(ITEM_PRICE * cartItems.length);
    }, [cartItems]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(response => response.json())
            .then(data => setPhotos([...data]));
    }, []);

    return (
        <Context.Provider value={{photos, toggleFavorite, cartItems, addCartItem, removeCartItem, cartTotal}}>
            {children}
        </Context.Provider> 
    )
}

export { ContextProvider, Context }