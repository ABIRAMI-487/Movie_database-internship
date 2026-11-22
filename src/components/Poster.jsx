import { useEffect, useState } from 'react'

const CACHE_KEY = 'poster-cache-v1'
const readCache = () => { try { return JSON.parse(localStorage.getItem(CACHE_KEY)) || {} } catch { return {} } }
const writeCache = (c) => { try { localStorage.setItem(CACHE_KEY, JSON.stringify(c)) } catch { /* ignore */ } }

// Gets the real poster from Wikipedia's free REST API (no API key). Cached after the first load.
function usePosterUrl(wiki) {
  const [url, setUrl] = useState(() => readCache()[wiki] || null)
  useEffect(() => {
    if (url || !wiki) return
    let cancelled = false
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${wiki}`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => {
        const src = d.thumbnail?.source
        if (!src || cancelled) return
        const big = src.replace(/\/\d+px-/, '/500px-') // ask for a larger size
        setUrl(big)
        writeCache({ ...readCache(), [wiki]: big })
      })
      .catch(() => {}) // offline / not found -> keep the placeholder
    return () => { cancelled = true }
  }, [wiki, url])
  return [url, setUrl]
}

export default function Poster({ movie, className = '' }) {
  const [url, setUrl] = usePosterUrl(movie.wiki)
  const [broken, setBroken] = useState(false)

  if (url && !broken) {
    return (
      <img
        className={`poster ${className}`} src={url} alt={`${movie.title} poster`} loading="lazy"
        onError={() => { setBroken(true); setUrl(null) }}
      />
    )
  }
  // Placeholder shown while loading, offline, or if no poster is found
  return (
    <div className={`poster placeholder ${className}`} aria-label={`${movie.title} poster`}>
      <span className="clap">🎬</span>
      <strong>{movie.title}</strong>
      <small>{movie.year}</small>
    </div>
  )
}
