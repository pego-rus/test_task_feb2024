import styles from './tooltip.module.css'

const Tooltip = ({ state, title }) => {
    return(
        <div className={!state ? styles.hideTooltip : styles.showTooltip}>
                <p>{title}</p>
        </div>
    )
} 

export default Tooltip