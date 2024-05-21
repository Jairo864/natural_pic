import { Route, Routes } from 'react-router-dom'
import BarraNav from './components/BarraNav'
import Home from './views/Home'
import Favoritos from './views/Favorites'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
      <BarraNav/>
      <Routes>
        <Route
          path='/'
          element={<Home/>}/>
        <Route
          path='/favoritos'
          element={<Favoritos/>}/>
      </Routes>
      
    </>
  )
}

export default App
