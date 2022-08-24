import React from "react";
import Menu from "./components/core/Menu";
import Layout from "./components/core/Layout";

function App() {
  return (
    <React.Fragment>
      <Menu />
      <Layout
        title="Book Shop"
        description="E-Commerce App for web development courses and books."
      />
    </React.Fragment>
  );
}

export default App;
