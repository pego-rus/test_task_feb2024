import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import axios from "axios"
import UsersAlbums from "./UsersAlbums/UsersAlbums";
import styles from './component.module.css'
import Loading from "../UI/Loading";

const List = () => {

    const [users, setUsers] = useState(null);

    useEffect(() => {
        async function fetchData() {
        try {
            const data = await axios.get('http://localhost:3000/users/');
            setUsers(data.data.map((el) => {
                return {
                    ...el, 
                    "active": false
                }}
           ));
        } catch(error) {
            console.log(error)
        }
    }
    fetchData()
    }, [])

    const changeAttachementVisibility = (event) => {
        setUsers(users.map((el) => 
            el.id === event.target.id ?
                {
                ...el, 
                "active": !el.active
                } : {...el}
           ))
    }

    return(
        <>
            <div className={styles.mainDiv}>
                <div className={styles.navButtons}>
                    <Link to='/' className={styles.activePage}><p>Каталог</p></Link>
                    <Link to='/favourites'><p>Избранное</p></Link>
                </div>
                {users ? users.map(el => 
                    <>  
                        <div key={el.id} className={styles.userName}>
                            {!el.active ? <img id={el.id} src="Open.png" height={'32px'} onClick={changeAttachementVisibility}/> 
                                : <img id={el.id} src="Close.png" height={'32px'} onClick={changeAttachementVisibility} />}
                            <p>{el.name}</p>
                        </div>
                        {el.active && <UsersAlbums userId={el.id}/>}
                    </>
                    ) 
                    : <Loading />}
            </div>
        </>
    )
}

export default List