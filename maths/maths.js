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
  
console.log(reducer({ currentValue: 5 }, { type: "ADD", payload: 3 }));