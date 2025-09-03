import React, { useState, useEffect } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    let time = setTimeout(() => {
      setCount(count+1);
      setCount(count+1);
      setCount(count+1);

    //   setCount(count+1)
    //   setCount(count+1)

    }, 1000);
    // return () => clearTimeout(time);
  });

//   useEffect(() => {
//     console.log("Component mounted");
//     document.write("This page will render only once")
//   }, []);

//   useEffect(() => {
//     setCalculation(count * 2);
//   }, [count]);

  return (
    <>
      <h1>This page has rendered {count} times</h1>
      {/* <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p> */}
    </>
  );
}

export default UseEffect;
