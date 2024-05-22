
import {  Route, Routes } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import HomePage from '../../pages/HomePage'
export default function App () {
    return (
        <div>
            {/* <h1>Trending movies</h1> */}
            <Navigation />

            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/movies" element={<div>Movies</div>}></Route>
                <Route path="*" element={<div>Not Found Page</div>}></Route>

            </Routes>
        
        </div>
    )
}