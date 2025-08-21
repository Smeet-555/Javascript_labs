import React from "react";
function Child({ message }) {
  return <h2>Message from Parent: {message}</h2>;
}

function Middle({ message }) {
  return <Child message={message} />;
}

function Parent() {
  const greeting = "Hello from Parent!";
  return (
    <div>
      <h1>Prop Drilling Example</h1>
      <Middle message={greeting} />
    </div>
  );
}

export default Parent;

