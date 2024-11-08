document.addEventListener("DOMContentLoaded", function() {
    const API_BASE_URL = 'https://api.themoviedb.org/3/movie/';
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
    const LANGUAGE = 'en-US';

    // Function to fetch movie details using the movie ID from the URL query parameters
    function fetchMovieDetails(movieId) {
        const API_URL = `${API_BASE_URL}${movieId}?api_key=${API_KEY}&language=${LANGUAGE}`;
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                displayMovieDetails(data);
            })
            .catch(error => {
                console.error('Error fetching the movie details:', error);
            });
    }

    // Function to display movie details in the container
    function displayMovieDetails(movie) {
        const moviePoster = document.getElementById('movie-poster');
        const movieTitle = document.getElementById('movie-title');
        const movieOverview = document.getElementById('movie-overview');

        moviePoster.src = `${IMAGE_BASE_URL}${movie.poster_path}`;
        movieTitle.textContent = movie.title;
        movieOverview.textContent = movie.overview;
    }

    // Function to navigate back to the main page
    function goBack() {
        window.history.back();
    }

    // Get the movie ID from the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('movieId');

    // Fetch and display movie details if movie ID is present
    if (movieId) {
        fetchMovieDetails(movieId);
    }

    // Add event listener to the back button
    document.querySelector('.back-button').addEventListener('click', goBack);
});
