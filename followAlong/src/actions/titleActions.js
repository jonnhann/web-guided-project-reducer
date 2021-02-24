export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const UPDATE_TITLE = "UPDATE_TITLE";

// action creator: a function that formats an action object 
// () => {type: string, payload: any}

export default {
    toggleEditing: () => {
        return { type: TOGGLE_EDITING };
    },
    updateTitle: (title) => {
        return {type: UPDATE_TITLE, payload: title}
    }
}