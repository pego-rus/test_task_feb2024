import axios from "axios";
import { useEffect, useState } from "react"
import Image from "./Image";
import styles from './image.module.css'
import Loading from "../../../UI/Loading";

const AlbumsPhotos = ({ albumId }) => {

    const [userPhotos, setUserPhotos] = useState(null);

    useEffect(() => {
        const getUserPhotos = async () => {
            try {
                setUserPhotos(await axios.get(`http://localhost:3000/photos/${albumId}`))
            } catch (error) {
                console.log(error)
            }
            
        };
        getUserPhotos();
    },[]);

    return (
        <>
        {userPhotos ?
            <div className={styles.imgesContainer}>
            {userPhotos.data.map(photo => 
                    <div key={photo.id} >
                        <Image key={photo.id} id={photo.id} url={photo.url} title={photo.title}/>
                    </div>
                    )}
            </div>
            : <Loading marginTop={'10px'} />}
        </>
    )
}

export default AlbumsPhotos