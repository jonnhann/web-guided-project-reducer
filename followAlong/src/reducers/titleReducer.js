import { TOGGLE_EDITING, UPDATE_TITLE } from "../actions/titleActions";

const titleReducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_EDITING:
            return { ...state, editing: !state.editing };
        case UPDATE_TITLE:
            return { ...state, title: action.payload, editing: false };
        default:
            return state;
    }
}

// ALWAYS start with {...state, } in your return values, to make sure that all values from the previous state object are included in the new state object.

export default titleReducer;