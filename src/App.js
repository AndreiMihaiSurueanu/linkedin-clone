import React from "react";
// Redux
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
// Components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widgets/Widgets";
// Styles
import "./App.css";

function App() {
  const user = useSelector(selectUser);
  return (
    // BEM naming convention
    <div className="app">
      <Header />
      {!user ? (
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
