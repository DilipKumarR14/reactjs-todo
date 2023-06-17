import React, { useRef } from "react";

function RefTut() {
  const inputRef = useRef("");
  const onClick = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus();
  };

  return (
    <dev>
      <h1>RefTut</h1>
      <input type="text" placeholder="Ex.." ref={inputRef} />
      <button onClick={onClick}>Change name</button>
    </dev>
  );
}

export default RefTut;
