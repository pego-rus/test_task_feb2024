import { Link } from 'react-router-dom'
import styles from './component.module.css'
import ClearFavourites from './clearFavourites/ClearFavourites'
import FavouriteImages from './favouriteImages/FavoutiteImages'
import { useSelector } from 'react-redux'

const Favourites = () => {

    const state = useSelector(state => state.image);

    return(
        <div className={styles.mainDiv}>
            <div className={styles.navButtons}>
                <Link to='/'><p>Каталог</p></Link>
                <Link to='/favourites' className={styles.activePage}><p>Избранное</p></Link>
            </div>
            {state.length === 0 ? <ClearFavourites />: <FavouriteImages state={state} />}
        </div>
    )
}

export default Favourites