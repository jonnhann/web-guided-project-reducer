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

export default titleReducer;