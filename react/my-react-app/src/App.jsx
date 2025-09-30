import React from "react";
import OnChange from "./components/EventHandling/onChange";
import OnSubmit from "./components/EventHandling/onSubmit";
import ProductContainer from "./components/ProductCard/ProductContainer";
import Parent from "./components/PropsChildren/Parent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Parent />
      </header>
    </div>
  );
}

export default App;
