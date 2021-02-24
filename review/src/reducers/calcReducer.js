const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return { ...state, currentValue: state.currentValue + action.payload };
      case "SUBTRACT":
        return { ...state, currentValue: state.currentValue - action.payload };
      case "CLEAR":
        return { ...state, currentValue: 0 };
      case "ADD_TO_MEMORY":
        return { ...state, memory: state.currentValue };
      default:
        return state;
    }
  };
  
export default reducer;
  
// Actions are always in the format:
// {type: string, payload: any}

// If we're refactoring a bunch of independent functions into a reducer,
// these names correspond like this:
// const add = (value) => {}
// action = {type: "ADD", payload: value}
  