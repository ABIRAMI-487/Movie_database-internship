# 🎬 Movie Database

A multi-page React application for browsing movies, searching by title, filtering by genre, viewing details and managing a favorites list, built with client-side routing.

## 👩‍💻 Internship Details

| Field | Details |
|---|---|
| Intern ID | CITS9910 |
| Full Name | ABIRAMI M |
| Duration | 04 Weeks |
| Project Name | Movie Database (React Router) |
| Project Scope | Design and develop a multi-page React application that lists movies, supports search and genre filtering, displays detailed information on a dedicated page, and allows users to save favorites, using React Router for navigation. |

## 🎯 Objectives

- Implement client-side routing with React Router.
- Build reusable components and custom hooks.
- Persist user preferences in the browser.
- Integrate an external data source for movie posters.

## ✨ Features

- Search movies by title in real time.
- Filter movies by genre. Filter state is stored in the URL so it can be shared.
- Display movie posters retrieved from the Wikipedia REST API (no API key required).
- Dedicated details page for each movie, showing rating, runtime, director and plot.
- Favorites list persisted in the browser using LocalStorage.
- Custom 404 page for unknown routes.

## 🛠️ Technology Stack

| Category | Technology |
|---|---|
| Library | React 18 |
| Build Tool | Vite 5 |
| Routing | React Router 6 |
| Data Source | Wikipedia REST API |
| Persistence | Browser LocalStorage |

## 📋 Prerequisites

- Node.js (LTS version)
- A modern web browser (Chrome or Edge recommended)

## 🚀 Installation and Usage

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in the browser.

To create a production build:

```bash
npm run build
npm run preview
```

Note: Movie posters require an active internet connection. If a poster cannot be loaded, a placeholder is displayed.

## 📁 Project Structure

```
04-movie-database
├── src
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── MovieCard.jsx
│   │   └── Poster.jsx
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── MovieDetails.jsx
│   │   ├── Favorites.jsx
│   │   └── NotFound.jsx
│   ├── data
│   │   └── movies.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── useFavorites.js
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 📚 Key Learnings

- Configuring routes with `BrowserRouter`, `Routes` and `Route`.
- Navigation using `Link`, `NavLink` and `useNavigate`.
- Reading route and query parameters with `useParams` and `useSearchParams`.
- Creating custom hooks (`useFavorites`).
- Fetching data with `fetch` inside `useEffect`.

## 🔮 Future Enhancements

- Integrate the TMDB API for a larger movie catalog.
- Add user reviews and ratings.
- Add pagination and sorting options.

## 🔧 Troubleshooting

| Issue | Resolution |
|---|---|
| `npm` is not recognized | Install Node.js and restart the editor. |
| Blank page on opening `index.html` | Run the project with `npm run dev`. Do not open the file directly. |
| Posters are not displayed | Check the internet connection and use Chrome or Edge. |

## 👤 Author

ABIRAMI M
Intern ID: CITS9910
