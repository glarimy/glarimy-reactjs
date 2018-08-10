export const ACTION_TYPES = {
    FETCHED_MOVIES: 'fetched_movies'
}

export function fetchMovies(json) {
    return {
        type: ACTION_TYPES.FETCHED_MOVIES,
        data: json
    }
}

export function fetchMoviesFromServer(url) {
    return (dispatch) => {
        fetch(url)
        .then((response) => {
                return response.json();
        }).then((json) => dispatch(fetchMovies(json)));
    }
}