import { useSearchParams } from 'react-router-dom'
import { movies, genres } from '../data/movies.js'
import MovieCard from '../components/MovieCard.jsx'

// Search + genre live in the URL (?q=...&genre=...) so results are shareable.
export default function Home({ fav }) {
  const [params, setParams] = useSearchParams()
  const q = params.get('q') || ''
  const genre = params.get('genre') || 'All'

  const update = (key, value) => {
    const next = new URLSearchParams(params)
    if (value && value !== 'All') next.set(key, value)
    else next.delete(key)
    setParams(next)
  }

  const list = movies.filter(
    (m) =>
      (genre === 'All' || m.genre === genre) &&
      m.title.toLowerCase().includes(q.toLowerCase())
  )

  return (
    <>
      <div className="filters">
        <input placeholder="Search movies..." value={q} onChange={(e) => update('q', e.target.value)} />
        <select value={genre} onChange={(e) => update('genre', e.target.value)}>
          {genres.map((g) => <option key={g}>{g}</option>)}
        </select>
      </div>
      {list.length === 0 ? (
        <p className="muted">No movies match your search.</p>
      ) : (
        <div className="grid">
          {list.map((m) => <MovieCard key={m.id} movie={m} fav={fav} />)}
        </div>
      )}
    </>
  )
}
