import React from "react";
// Components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widgets/Widgets";
// Styles
import "./App.css";

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <Header />
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
