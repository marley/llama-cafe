import Main from "./pages/Main";
import About from "./pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [pageName, setPageName] = useState("Main"); // Main or About

  function onHandleClick(newPageName) {
    setPageName(newPageName); // pageName = newPageName
  }

  return (
    <>
      <nav id="nav-menu">
        <ul>
          <li>
            <button onClick={() => onHandleClick("Main")}>Home</button>
          </li>
          <li>
            <button onClick={() => onHandleClick("About")}>About</button>
          </li>
        </ul>
      </nav>
      {pageName === "Main" ? <Main /> : <About />}
    </>
  );
}

export default App;
