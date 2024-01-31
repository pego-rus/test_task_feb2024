import axios from "axios";
import { useEffect, useState } from "react"
import Image from "./Image";
import styles from './image.module.css'

const AlbumsPhotos = ({ albumId }) => {

    const [userPhotos, setUserPhotos] = useState(null);

    useEffect(() => {
        const getUserPhotos = async () => {
            setUserPhotos(await axios.get(`http://localhost:3000/photos/${albumId}`))
        };
        getUserPhotos();
    },[]);

    return (
        <div className={styles.imgesContainer}>
        {userPhotos && userPhotos.data.map(photo => 
                <div key={photo.id} >
                    <Image key={photo.id} id={photo.id} url={photo.url} title={photo.title}/>
                </div>
                )}
        </div>
    )
}

export default AlbumsPhotos