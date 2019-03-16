import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Codelabs google</h1>
          <ul>
            <li>
              <a href="./pages/your-first-pwapp/index.html">Your first PWA</a>
            </li>
            <li>
              <a href="./pages/image-styling-web-components/index.html">
                Image styling with Web Components
              </a>
            </li>
            <li>
              <a href="./pages/material-components-web/index.html">
                Material components web
              </a>
            </li>
            <li>
              <a href="./pages/adaptive-web-media/index.html">
                DASH: Dynamic Adaptive Streaming over HTTPS
              </a>
            </li>
            <li>
              <a href="./pages/autocomplete/index.html">
                Autocomplete form fields
              </a>
            </li>
            <li>
              <a href="./pages/web-worker/index.html">Web worker</a>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
