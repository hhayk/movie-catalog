import {
    MOVIES_LOAD_START,
    MOVIES_LOAD_SUCCESS,
    MOVIES_LOAD_FAIL,
    CHANGE_ACTIVE_PAGE
} from '../constants/actionTypes';

const defaultState = {
    movies: [],
    totalResults: 0,
    activePage: 1,
    error: ""
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case MOVIES_LOAD_START:
            return {
                ...state,
                movies: [],
                error: ''
            }
        case MOVIES_LOAD_SUCCESS:
            return {
                ...state,
                movies: action.payload.movies,
                totalResults: action.payload.totalResults,
                error: ''
            }
        case MOVIES_LOAD_FAIL:
            return {
                ...state,
                movies: [],
                error: action.payload.error
            }
        case CHANGE_ACTIVE_PAGE:
            return {
                ...state,
                activePage: action.payload.activePage
            }
        default:
            return state;
    }
}