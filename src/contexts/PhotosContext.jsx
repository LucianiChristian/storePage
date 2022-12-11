import { createContext, useEffect, useState } from 'react';

const PhotosContext = createContext();

function PhotosContextProvider({children}) {
    const [photos, setPhotos] = useState([]);

    function toggleFavorite(id) {
        setPhotos(prevPhotos => prevPhotos.map(photo => {
            return photo.id === id ? {...photo, isFavorite: !photo.isFavorite} : photo
        }));
    }

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(response => response.json())
            .then(data => setPhotos([...data]));
    }, []);

    return (
        <PhotosContext.Provider value={{photos, toggleFavorite}}>
            {children}
        </PhotosContext.Provider> 
    )
}

export { PhotosContextProvider, PhotosContext }