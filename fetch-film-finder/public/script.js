const tmdbKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmNiNjJkZjdmMzY3NmEzM2IwMDhjZTkyZmRiYjYxYSIsIm5iZiI6MTc3MDExMDM3Ny40MDQsInN1YiI6IjY5ODFiZGE5MjA4YWQzM2E5YjRjOTZiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WrNHHaSOo3XNdKdGovBrm-DupV58cJGGOiQbztBaDnc";
const tmdbBaseUrl = "https://api.themoviedb.org/3/";
const playBtn = document.getElementById("playBtn");
const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "Bearer " + tmdbKey,
    },
};

const getGenres = async () => {
    try {
        const urlToFetch = tmdbBaseUrl + "genre/movie/list?language=fr";
        const response = await fetch(urlToFetch, options);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        // response
        const jsonResponse = await response.json();
        // console.log(jsonResponse.genres);
        return jsonResponse.genres;
    } catch (error) {
        console.error(error);
    }
};

const getMovies = async () => {
    const selectedGenre = getSelectedGenre();
    const urlToFetch =
        tmdbBaseUrl + "discover/movie?with_genres=" + selectedGenre;
    try {
        const response = await fetch(urlToFetch, options);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const responseJson = await response.json();
        const movies = responseJson.results;
        // console.log(movies);
        return movies;
    } catch (error) {
        console.error("Erreur", error);
    }
};

const getMovieInfo = async (movie) => {
    const movieId = movie.id;
    const urlToFetch = tmdbBaseUrl + "movie/" + movieId;
    try {
        const response = await fetch(urlToFetch, options);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const movieInfo = await response.json();
        console.log("RESPONSE");
        console.log(movieInfo);
        return movieInfo;
    } catch (error) {
        console.error("Erreur", error);
    }
};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
    const movieInfo = document.getElementById("movieInfo");
    if (movieInfo.childNodes.length > 0) {
        clearCurrentMovie();
    }
    const movies = await getMovies();
    const randomMovie = getRandomMovie(movies);
    const info = await getMovieInfo(randomMovie);
    displayMovie(info);
    // const randomMovieId = Math.floor(Math.random() * movies.length);
    console.log(info);
};

getGenres().then(populateGenreDropdown); //.then(getMovies);
playBtn.onclick = showRandomMovie;
