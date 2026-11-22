import { useParams, Link, useNavigate } from 'react-router-dom'
import { movies } from '../data/movies.js'
import Poster from '../components/Poster.jsx'

export default function MovieDetails({ fav }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const movie = movies.find((m) => m.id === Number(id))

  if (!movie) {
    return (
      <div>
        <h2>Movie not found</h2>
        <Link to="/">← Back to all movies</Link>
      </div>
    )
  }

  return (
    <div className="details">
      <Poster movie={movie} className="big" />
      <div>
        <button className="link" onClick={() => navigate(-1)}>← Back</button>
        <h1>{movie.title} <small className="muted">({movie.year})</small></h1>
        <p className="muted">{movie.genre} · {movie.runtime} min · Directed by {movie.director}</p>
        <p className="rating">★ {movie.rating} / 10</p>
        <p>{movie.plot}</p>
        <button className="primary" onClick={() => fav.toggle(movie.id)}>
          {fav.has(movie.id) ? '❤️ Remove from favorites' : '🤍 Add to favorites'}
        </button>
      </div>
    </div>
  )
}
