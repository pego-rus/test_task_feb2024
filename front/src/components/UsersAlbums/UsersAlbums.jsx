import { useEffect, useState } from "react"
import AlbumsPhotos from "./AlbumsPhotos/AlbumsPhotos"
import Loading from "../../UI/Loading"
import axios from "axios"
import styles from './userAlbums.module.css'

const UsersAlbums = ({ userId }) => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const getUserData = async () => {
            let albums;
            try {
                albums = await axios.get(`http://localhost:3000/albums/${userId}`);
            } catch (error) {
                console.log(error)
            }

            setUserData(albums?.data?.map((album) => {
                return {
                    ...album,
                    'activeAlbum': false
                }
            }))
        };
        getUserData();
    }, [])

    const changeAttachementVisibility = (event) => {
        setUserData(userData.map((el) => 
            el.albumId === event.target.id ?
                {
                ...el, 
                "active": !el.active
                } : {...el}
           ))
    }

    return (
        <>
            {userData ? userData.map(album => 
                <>
                    <div key={album.id} className={styles.albumTitle}>
                        {!album.active ? <img id={album.albumId} src="Open.png" height={'32px'} onClick={changeAttachementVisibility} /> 
                            : <img id={album.albumId} src="Close.png" height={'32px'} onClick={changeAttachementVisibility} />}
                        <div>{album.title}</div>
                    </div>
                    {album.active && <AlbumsPhotos albumId={album.albumId}/>}
                </>)
                : <Loading marginTop={'10px'} />}
        </>
    )
}

export default UsersAlbums