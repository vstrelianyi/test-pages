import React from "react";

import "./common/style.css";
import "./common/reset.css";

import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <MainContent />

      <Footer />
    </div>
  );
}

export default App;
