import { useContext } from 'react';
import Image from '../components/Image';
import { PhotosContext } from '../contexts/PhotosContext';
import getClass from '../utils/getClass';

export default function Photos() {
    const {photos} = useContext(PhotosContext);
    
    return (
        <main className="photos">
            {photos.map((photo, index) => <Image className={getClass(index)} key={photo.id} img={photo} />)}
        </main>
    )
}