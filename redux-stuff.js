const redux = require("redux");
const createStore = redux.createStore;

// Initial State
const initialState = {
    counter: 0
}

// Reducer 
const rootReducer = (state = initialState, action) => {
    if (action.type === "INCREMENT_COUNTER") {
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if (action.type === "ADD_COUNTER") {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Dispatch Actions
store.dispatch({ type: "INCREMENT_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log(store.getState());
