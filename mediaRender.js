// Make all .logo elements go to homepage
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.logo').forEach(function(logo) {
    logo.style.cursor = 'pointer';
    logo.onclick = function() {
      window.location.href = 'index.html';
    };
  });
});
// Renders movie cards
function renderMovies(movies) {
  const grid = document.getElementById("movies-grid");
  grid.innerHTML = "";
  if (!movies || movies.length === 0) {
    grid.innerHTML =
      '<div style="color:#aaa;text-align:center;">No movies found.</div>';
    return;
  }
  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img class="card-img" src="https://image.tmdb.org/t/p/w500${
        movie.poster_path
      }" alt="${movie.title}" />
      <div class="card-info">
        <div class="card-title">${movie.title}</div>
        <div class="card-meta">${
          movie.release_date ? movie.release_date.substring(0, 4) : ""
        }</div>
      </div>
    `;
    card.onclick = () => {
      window.location.href = `player.html?type=movie&id=${movie.id}`;
    };
    grid.appendChild(card);
  });
}

// Renders TV show cards
function renderTVShows(shows) {
  const grid = document.getElementById("tvshows-grid");
  grid.innerHTML = "";
  if (!shows || shows.length === 0) {
    grid.innerHTML =
      '<div style="color:#aaa;text-align:center;">No TV shows found.</div>';
    return;
  }
  shows.forEach((show) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img class="card-img" src="https://image.tmdb.org/t/p/w500${
        show.poster_path
      }" alt="${show.name}" />
      <div class="card-info">
        <div class="card-title">${show.name}</div>
        <div class="card-meta">${
          show.first_air_date ? show.first_air_date.substring(0, 4) : ""
        }</div>
      </div>
    `;
    card.onclick = () => {
      window.location.href = `player.html?type=tv&id=${show.id}&season=1&episode=1`;
    };
    grid.appendChild(card);
  });
}
