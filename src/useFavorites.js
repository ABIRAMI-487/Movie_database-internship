import { useEffect, useState } from 'react'

const KEY = 'movie-favorites'

export function useFavorites() {
  const [ids, setIds] = useState(() => {
    try { return JSON.parse(localStorage.getItem(KEY)) || [] } catch { return [] }
  })
  useEffect(() => { localStorage.setItem(KEY, JSON.stringify(ids)) }, [ids])
  const toggle = (id) =>
    setIds((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]))
  return { ids, toggle, has: (id) => ids.includes(id) }
}
