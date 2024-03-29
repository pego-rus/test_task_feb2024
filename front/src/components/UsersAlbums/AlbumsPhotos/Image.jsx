import { useState } from 'react'
import styles from './image.module.css'
import Tooltip from '../../../UI/Tooltip';
import { useDispatch, useSelector } from 'react-redux';
import { addFavouriteImage, deleteFavouriteImage } from '../../../stateManager/imageSlice';

const Image = ({ id, url, title }) => {
    
    const [imageActive, setImageActive] = useState(false);
    const [tooltipState, setTooltipState] = useState(false);
    const state = useSelector(state => state.image);
    const dispatch = useDispatch();

    const makeImageActive = (event) => {
        event.stopPropagation();
        setImageActive(!imageActive)
    }
    
    const showTooltip = (event) => {
        event.stopPropagation();
        setTooltipState(true);
    };

    const hideTooltip = (event) => {
        event.stopPropagation();
        setTooltipState(false);
    };

    const changeFavouriteState = (event) => {
        event.stopPropagation();
        state.some((element) => element.id === id) 
            ? dispatch(deleteFavouriteImage({
                id,
                url,
                title
            }))
            : dispatch(addFavouriteImage({
                id,
                url,
                title
            }))
    }

    return(
        <>
            <div className={imageActive ? styles.imageActive : styles.image} onClick={makeImageActive}>
                <img src={url} onMouseOver={showTooltip} onMouseOut={hideTooltip} />
                <div className={styles.favouriteButton}>
                    <svg className={state.some((element) => element.id === id) ? styles.active : styles.nonActive} onClick={changeFavouriteState} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.0868 1.04641C8.43933 0.256421 9.56067 0.25642 9.9132 1.0464L11.9048 5.50932L16.767 6.02193C17.628 6.1127 17.9746 7.1804 17.3311 7.75964L13.7 11.0284L14.7145 15.8063C14.8943 16.6527 13.9869 17.3124 13.2371 16.8805L9 14.4393L4.76287 16.8805C4.01306 17.3124 3.10573 16.6527 3.28547 15.8063L4.3 11.0284L0.668853 7.75964C0.0253845 7.1804 0.372042 6.1127 1.23305 6.02193L6.09524 5.50932L8.0868 1.04641Z"/>
                    </svg>
                </div>
                {(!imageActive && title) && <Tooltip state={tooltipState} title={title} />}
            </div>
        </>
    )
}

export default Image