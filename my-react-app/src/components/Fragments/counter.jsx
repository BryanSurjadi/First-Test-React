import React from "react";

class Counter extends React.Component {
  render() {
    return (
      <div className="flex items-center">
        <h1 className="mr-5">1</h1>
        <button className="bg-blue-500 text-white p-3 rounded-md">+</button>
        <h2 className="text-xl">Trixie</h2>
      </div>
    );
  }
}

export default Counter;
