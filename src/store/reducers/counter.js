import * as actionsTypes from "../actions";


const initialState = {
    counter: 0
}


const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case actionsTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionsTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionsTypes.SUBSTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            }
    }
    return state;
}


export default counterReducer;