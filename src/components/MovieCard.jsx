import { Link } from 'react-router-dom'
import Poster from './Poster.jsx'

export default function MovieCard({ movie, fav }) {
  return (
    <div className="card">
      <Link to={`/movie/${movie.id}`}>
        <Poster movie={movie} />
      </Link>
      <div className="card-body">
        <div>
          <Link to={`/movie/${movie.id}`} className="title">{movie.title}</Link>
          <div className="muted">{movie.year} · {movie.genre}</div>
        </div>
        <div className="right">
          <span className="rating">★ {movie.rating}</span>
          <button className="icon" onClick={() => fav.toggle(movie.id)} aria-label="Toggle favorite">
            {fav.has(movie.id) ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
    </div>
  )
}
