import { useEffect, useLayoutEffect, useState } from "react"
import axios from "axios"

const List = () => {
    const [datas, setDatas] = useState(null);
    useEffect(() => {
        async function fetchData() {
        try {
           setDatas(await axios.get('http://localhost:3000/users/'));
           console.log(datas)
        } catch(error) {
            console.log(error)
        }
    }
    fetchData()
    }, [])

    return(
        <>
            <h1>list</h1>
            {datas ? datas.data.map(el => `<div>${el.name}</div>`) : <span>no data</span>
                }
        </>
    )
}

export default List