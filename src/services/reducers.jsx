import { CLEAR_PARAMS, 
    RESULTS_ERROR, 
    SEARCH_PARAMETERS, 
    SEARCH_REQUEST, 
    SEARCH_SUCCESS, 
    CLEAR_RESULTS
    } from "./actions";

const initialState = {
    results: [],
    fetchSearchRequest: false,
    fetchSearchError: false,
    payment_method: '',
    amount: '',
    currency: '',
    transaction_type: '',
    crypto_type: '',
    online_sort: false,
    price_sort: false
};

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_REQUEST: {
        return {
            ...state,
            fetchSearchRequest: true,
        };
        }
    
        case SEARCH_SUCCESS: {
        return {
            ...state,
            fetchSearchRequest: false,
            fetchSearchError: false,
            results: state.results.concat(action.results),
        };
        }

        case SEARCH_PARAMETERS: {
            return {
                ...state,
                currency: action.currency,
                transaction_type: action.transaction_type,
                crypto_type: action.crypto_type,
                online_sort: action.online_sort,
                price_sort: action.price_sort
            };
            }
    
        case RESULTS_ERROR: {
        return {
            ...state,
            fetchSearchRequest: false,
            fetchSearchError: true,
            results: [],
        };
        }

        case CLEAR_RESULTS: {
            return {
                ...state,
                results: [],
            };
        }

        case CLEAR_PARAMS: {
            return {
                ...state,
                payment_method: '',
                currency: '',
                transaction_type: '',
                crypto_type: '',
                online_sort: false,
                price_sort: false
            };
        }

        default: {
        return state;
        }
    }
};