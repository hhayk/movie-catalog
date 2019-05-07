import axios from 'axios';
import { IMDB_API } from '../constants/environments';
import { API_KEY } from '../constants/environments';
import {
    MOVIES_LOAD_START,
    MOVIES_LOAD_SUCCESS,
    MOVIES_LOAD_FAIL,
    CHANGE_ACTIVE_PAGE,
} from '../constants/actionTypes';

export function getMoviesByName(name, page) {
    return dispatch => {
        dispatch({
            type: MOVIES_LOAD_START
        });

        axios
            .get(IMDB_API + '?i=tt3896198&apikey=' + API_KEY + '&s=' + name + '&page=' + page)
            .then(response => {
                if (response.data.Search) {
                    dispatch({
                        type: MOVIES_LOAD_SUCCESS,
                        payload: { movies: response.data.Search, totalResults: response.data.totalResults }
                    })
                } else {
                    dispatch({
                        type: MOVIES_LOAD_FAIL,
                        payload: { error: response.data.Error }
                    })
                }
            })
            .catch(error => {
                dispatch({
                    type: MOVIES_LOAD_FAIL,
                    payload: { error: error.response }
                })
            });
    }
}

export function setActivePage(page) {
    return dispatch => {
        dispatch({
            type: CHANGE_ACTIVE_PAGE,
            payload: { activePage: page }
        });
    }
}