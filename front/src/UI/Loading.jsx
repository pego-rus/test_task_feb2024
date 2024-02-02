import styles from './loading.module.css'

const Loading = ({ marginTop }) => {
    return(
        <>
            <div className={styles.animatedLoading} style={{marginTop: marginTop}}></div>
        </>
    )
}

export default Loading