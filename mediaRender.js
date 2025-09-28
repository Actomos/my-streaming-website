// Renders a big Netflix-style banner that shuffles content
function renderBanner(contentList) {
  const banner = document.getElementById("banner");
  if (!banner || !contentList || contentList.length === 0) {
    return;
  }
  function showRandomBanner() {
    const item = contentList[Math.floor(Math.random() * contentList.length)];
    const poster = item.backdrop_path
      ? `https://image.tmdb.org/t/p/original${item.backdrop_path}`
      : item.poster_path
      ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
      : "https://via.placeholder.com/1280x720?text=No+Image";
    banner.innerHTML = `
      <div class="banner-img" style="background-image:url('${poster}');background-size:cover;background-position:center;height:400px;display:flex;align-items:flex-end;">
        <div class="banner-info" style="background:rgba(0,0,0,0.6);padding:2rem;width:100%;color:#fff;">
          <h1 style="font-size:2.5rem;margin:0 0 1rem 0;">${
            item.title || item.name
          }</h1>
          <p style="font-size:1.2rem;max-width:600px;">${
            item.overview || "No description available."
          }</p>
          <button style="margin-top:1.5rem;padding:0.7rem 2rem;font-size:1.1rem;background:#e50914;color:#fff;border:none;border-radius:6px;cursor:pointer;" onclick="window.location.href='player.html?type=${
            item.media_type || "movie"
          }&id=${item.id}'">Watch Now</button>
        </div>
      </div>
    `;
  }
  showRandomBanner();
  // Shuffle banner every 15 seconds
  setInterval(showRandomBanner, 15000);
}
// Make all .logo elements go to homepage
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".logo").forEach(function (logo) {
    logo.style.cursor = "pointer";
    logo.onclick = function () {
      window.location.href = "index.html";
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
    const poster = movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : "https://via.placeholder.com/300x450?text=No+Image";
    card.innerHTML = `
      <img class="card-img" src="${poster}" alt="${movie.title}" />
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
      const poster = show.poster_path
        ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
        : "https://via.placeholder.com/300x450?text=No+Image";
      card.innerHTML = `
      <img class="card-img" src="${poster}" alt="${show.name}" />
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
}
