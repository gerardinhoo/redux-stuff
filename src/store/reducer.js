const initialState = {
    counter: 0,
    results: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return {
                counter: state.counter + 1
            }
        case "DECREMENT":
            return {
                counter: state.counter - 1
            }
        case "ADD":
            return {
                counter: state.counter + action.value
            }
        case "SUBSTRACT":
            return {
                counter: state.counter - action.value
            }
        case "STORE_RESULT":
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter })
            }
    }
    return state;
}


export default reducer;