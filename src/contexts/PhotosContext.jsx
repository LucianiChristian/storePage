import { createContext, useEffect, useState } from 'react';

const PhotosContext = createContext();

function PhotosContextProvider({children}) {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(response => response.json())
            .then(data => setPhotos([...data]));
    }, []);

    return (
        <PhotosContext.Provider value={photos}>
            {children}
        </PhotosContext.Provider> 
    )
}

export { PhotosContextProvider, PhotosContext }