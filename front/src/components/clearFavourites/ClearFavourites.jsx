import styles from './clearFavourites.module.css'

const ClearFavourites = () => {
    return(
        <div className={styles.clearFavourites}>
            <img src="clearFavourites.png" alt="" />
            <p>Список избранного пуст</p>
            <p>Добавляйте изображения, нажимая на звездочки</p>
        </div>
    )
}

export default ClearFavourites