import { Link } from 'react-router-dom'
import { movies } from '../data/movies.js'
import MovieCard from '../components/MovieCard.jsx'

export default function Favorites({ fav }) {
  const list = movies.filter((m) => fav.has(m.id))
  return (
    <>
      <h2>Your favorites</h2>
      {list.length === 0 ? (
        <p className="muted">Nothing here yet. <Link to="/">Browse movies</Link> and tap the heart.</p>
      ) : (
        <div className="grid">{list.map((m) => <MovieCard key={m.id} movie={m} fav={fav} />)}</div>
      )}
    </>
  )
}
