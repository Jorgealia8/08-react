import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "../header/header";
import { Counter } from "../counter/counter";
import { Circule } from "../circule/circule";
import { Shapes } from "../shapes/shapes";

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
                <Counter initial={10}></Counter>
                <Counter initial={1}></Counter>
                <div>
                    <Circule></Circule>
                </div>
                <div>
                    <Shapes>
                        <Circule></Circule>
                        <Circule></Circule>
                    </Shapes>
                </div>
                <div>
                    <Shapes>
                        <Circule></Circule>
                    </Shapes>
                </div>
            </header>
        </div>
    );
}

export default App;
