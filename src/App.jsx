import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Accueil from './pages/Accueil'
import Recettes from './pages/Recettes'
import Detail from './pages/Detail'
import NotFound from './pages/NotFound'
import APropos from './pages/APropos'
import Favoris from './pages/Favoris'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/recettes" element={<Recettes />} />
        <Route path="/recettes/:id" element={<Detail />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App