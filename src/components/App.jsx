import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center container w-100 m-0 p-0">
      <div className="row d-flex justify-content-center">
        <h1 className="text-secondary">Welcome to My Weather</h1>
        <Weather />
      </div>
    </div>
  );
}

export default App;
