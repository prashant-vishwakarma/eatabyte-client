import React from "react";
import SideBar from "../core/SideBar";
import "../App.scss";

function App() {
  return (
    <div className="main">
      <SideBar>
        <a href="">Item 1</a>
        <a href="">Item 2</a>
        <a href="">Item 3</a>
        <a href="">Item 4</a>
        <a href="">Item 5</a>
      </SideBar>
      <div className="content-area"></div>
    </div>
  );
}

export default App;
