import React from "react";
import ModelProvider from "../contexts/Model.context";
import Home from "../pages/Home";

function App() {
  return (
    <ModelProvider>
      <Home />
    </ModelProvider>
  );
}

export default App;
