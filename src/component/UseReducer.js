import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1, showText: state.showText };
    case "toggleText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const Test = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
            dispatch({ type: "increment" });
            dispatch({ type: "toggleText" });
        }}
      >
        Click Here
      </button>
      {state.showText && <p>This is a state</p>}
    </div>
  );
};
export default Test;