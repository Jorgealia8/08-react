import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "../header/header";
import { Counter } from "../counter/counter";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <Counter></Counter>
            </header>
        </div>
    );
}

export default App;
