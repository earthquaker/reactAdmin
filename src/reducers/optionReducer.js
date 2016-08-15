export default function reducer(state={}, action) {
    switch(action.type) {
        case "CHANGE_OPTION_KEY": {
            state = {...state, key: action.payload};
            return state;
        }
        default:
            return state;
    }
};