import Image from "../UsersAlbums/AlbumsPhotos/Image";
import styles from './favouriteImages.module.css'

const FavouriteImages = ({ state }) => {

    return(
        <div className={styles.favouriteImagesContainer}>
            {state.map((image) => 
                <div key={image.id}>
                    <Image id={image.id} url={image.url} title={false} />
                    <span>{image.title}</span>
                </div>)}
        </div>
    )
}

export default FavouriteImages