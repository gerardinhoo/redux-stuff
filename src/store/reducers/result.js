import * as actionsTypes from "../actions";


const initialState = {
    results: []
}


const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: action.result })
            }
        case actionsTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultElId)
            return {
                ...state,
                results: updatedArray
            }
    }
    return state;
}


export default resultReducer;