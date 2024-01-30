import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Catalog from './components/Catalog'
import Favourites from './components/Favourites'


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                    <Route path='/' element={<Catalog />} />
                    <Route path='/favourites' element={<Favourites />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router