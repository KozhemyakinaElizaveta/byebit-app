import { getInfo } from "./bye-api";

export const SEARCH_REQUEST = "SEARCH_REQUEST";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const RESULTS_ERROR = "RESULTS_ERROR";
export const SEARCH_PARAMETERS = "SEARCH_PARAMETERS";
export const CLEAR_PARAMS = "CLEAR_PARAMS";
export const CLEAR_RESULTS = "CLEAR_RESULTS";


export const getSearch = (options) => (dispatch) => {
    dispatch({ type: SEARCH_REQUEST });

    getInfo(options)
        .then((res) => {
            dispatch({
                type: SEARCH_SUCCESS,
                results: res.data.orders
            });
        })
        .catch(() => dispatch(resultsError()));
}

const resultsError = () => ({
    type: RESULTS_ERROR,
});