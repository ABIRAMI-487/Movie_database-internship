import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import MovieDetails from './pages/MovieDetails.jsx'
import Favorites from './pages/Favorites.jsx'
import NotFound from './pages/NotFound.jsx'
import { useFavorites } from './useFavorites.js'

export default function App() {
  const fav = useFavorites()
  return (
    <>
      <Navbar count={fav.ids.length} />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home fav={fav} />} />
          <Route path="/movie/:id" element={<MovieDetails fav={fav} />} />
          <Route path="/favorites" element={<Favorites fav={fav} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}
