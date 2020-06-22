import { createStore } from 'redux';

const incrementCount = ({incrementBy=1} = {}) => ({
    type: 'INCREMENT', 
    incrementBy
});

const decrementCount = ({decrementBy=1} = {}) => ({
    type: 'DECREMENT'
});

const setCount = ({value}) => ({
    type: 'SET',
    value
});

// Reducers
// 1. Reducers are pure functions (only touch their scope)
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incrementBy };
        case 'DECREMENT':
            return { count: state.count - 1};
        case 'RESET':
            return { count: 0};
        case 'SET':
            return { count: action.value};
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(setCount({value: 0}));
