import Main from "./pages/Main";
import About from "./pages/About";
import Footer from "./components/Footer";
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
      <nav id="nav-menu" className="d-flex">
        <img
          className="header-img"
          src="src/img/llamacoffee.png"
          alt="the llama coffee logo"
        ></img>
        <ul>
          <li>
            <button onClick={() => onHandleClick("Main")}>
              <h2>Home</h2>
            </button>
          </li>
          <li>
            <button onClick={() => onHandleClick("About")}>
              <h2>About</h2>
            </button>
          </li>
        </ul>
      </nav>
      <div className="min-vh-100">
        {pageName === "Main" ? <Main /> : <About />}
      </div>
      <Footer />
    </>
  );
}

export default App;
