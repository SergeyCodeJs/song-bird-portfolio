const initialState = {
    data: {},
    loading: true,
    error: false
}

function BirdsDataReducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_DATA_REQUEST":
            return {
                ...state,
                loading: true,
                error: false
            }
        case "FETCH_DATA_SUCCESS":
            return {data: action.payload, loading: false, error: false}
        case "FETCH_DATA_ERROR":
            return {
                ...state,
                loading: false,
                error: true
            }
        default: return state
    }
}

export default BirdsDataReducer