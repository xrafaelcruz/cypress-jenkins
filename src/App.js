import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    window.localStorage.getItem("login")
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="http://localhost:3000">
          Buy Now
        </a>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.localStorage.setItem("login", "true");
            setIsLoggedIn("true");
          }}
        >
          <input id="username" type="text" />
          <input id="password" type="password" />
          <button type="submit">Submit</button>
        </form>

        {isLoggedIn && <div id="flash">You logged into a secure area!</div>}
      </header>
    </div>
  );
}

export default App;
