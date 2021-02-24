const titleReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_EDITING":
            return { ...state };
        case "UPDATE_TITLE":
            return { ...state };
        default:
            return state;
    }
}

// ALWAYS start with {...state,} in your return values, to make sure that all values from the previous state object are included in the new state object.

export default titleReducer;