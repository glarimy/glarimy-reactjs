import { ACTION_TYPES } from "../actions/actions.js";

export function reducer(state = { movies: {} }, action) {
    switch (action.type) {
        case ACTION_TYPES.FETCHED_MOVIES:
            let current = {
                movies: state.movies
            };
            current.movies[action.data.language] = action.data.movies;
            return current;
        default:
            return state;
    }
};