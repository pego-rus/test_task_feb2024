import { BrowserRouter, Routes, Route } from 'react-router-dom'
import List from './components/List/List'
import Favourites from './components/Favourites/Favourites'

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/list' element={<List />} />
                <Route path='/favourites' element={<Favourites />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router