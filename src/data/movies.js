// Real films. `wiki` is the English Wikipedia article name – the poster is fetched
// from Wikipedia's free API at runtime (no API key needed, internet required).
// Ratings are approximate IMDb values.
export const movies = [
  { id: 1, title: 'Inception', year: 2010, genre: 'Sci-Fi', rating: 8.8, runtime: 148, director: 'Christopher Nolan', wiki: 'Inception', plot: 'A thief who steals secrets through dreams is offered a final job: plant an idea inside a target\'s mind.' },
  { id: 2, title: 'Interstellar', year: 2014, genre: 'Sci-Fi', rating: 8.7, runtime: 169, director: 'Christopher Nolan', wiki: 'Interstellar_(film)', plot: 'With Earth dying, a team of explorers travels through a wormhole in search of a new home for humanity.' },
  { id: 3, title: 'The Dark Knight', year: 2008, genre: 'Action', rating: 9.0, runtime: 152, director: 'Christopher Nolan', wiki: 'The_Dark_Knight', plot: 'Batman faces the Joker, a criminal mastermind who pushes Gotham City into chaos.' },
  { id: 4, title: 'Parasite', year: 2019, genre: 'Thriller', rating: 8.5, runtime: 132, director: 'Bong Joon-ho', wiki: 'Parasite_(2019_film)', plot: 'A poor family schemes its way into the lives of a wealthy household, with unexpected consequences.' },
  { id: 5, title: 'Avengers: Endgame', year: 2019, genre: 'Action', rating: 8.4, runtime: 181, director: 'Anthony & Joe Russo', wiki: 'Avengers:_Endgame', plot: 'The surviving Avengers assemble once more to undo the damage caused by Thanos.' },
  { id: 6, title: 'Spirited Away', year: 2001, genre: 'Animation', rating: 8.6, runtime: 125, director: 'Hayao Miyazaki', wiki: 'Spirited_Away', plot: 'A young girl wanders into a world of spirits and must work to free her parents.' },
  { id: 7, title: '3 Idiots', year: 2009, genre: 'Comedy', rating: 8.4, runtime: 170, director: 'Rajkumar Hirani', wiki: '3_Idiots', plot: 'Two friends search for their long-lost college buddy who taught them to chase excellence, not grades.' },
  { id: 8, title: 'Dangal', year: 2016, genre: 'Drama', rating: 8.3, runtime: 161, director: 'Nitesh Tiwari', wiki: 'Dangal_(film)', plot: 'A former wrestler trains his daughters to become world-class wrestlers.' },
  { id: 9, title: 'RRR', year: 2022, genre: 'Action', rating: 7.8, runtime: 182, director: 'S. S. Rajamouli', wiki: 'RRR_(film)', plot: 'Two revolutionaries form an unlikely friendship while fighting British colonial rule.' },
  { id: 10, title: 'Titanic', year: 1997, genre: 'Romance', rating: 7.9, runtime: 195, director: 'James Cameron', wiki: 'Titanic_(1997_film)', plot: 'A young couple from different worlds fall in love aboard the doomed ocean liner.' },
  { id: 11, title: 'Pulp Fiction', year: 1994, genre: 'Crime', rating: 8.9, runtime: 154, director: 'Quentin Tarantino', wiki: 'Pulp_Fiction', plot: 'The lives of hitmen, a boxer and a gangster\'s wife intertwine in four tales of violence and redemption.' },
  { id: 12, title: 'The Godfather', year: 1972, genre: 'Crime', rating: 9.2, runtime: 175, director: 'Francis Ford Coppola', wiki: 'The_Godfather', plot: 'The aging head of a crime family hands control to his reluctant youngest son.' },
]
export const genres = ['All', ...new Set(movies.map((m) => m.genre))]
