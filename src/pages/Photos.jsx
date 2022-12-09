import { useContext } from 'react';
import Image from '../components/Image';
import { PhotosContext } from '../contexts/PhotosContext';
import getClass from '../utils/getClass';

export default function Photos() {
    const photosData = useContext(PhotosContext);
    
    return (
        <main className="photos">
            {photosData.map((photo, index) => <Image className={getClass(index)} key={photo.key} img={photo} />)}
        </main>
    )
}