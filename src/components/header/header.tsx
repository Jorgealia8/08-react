import { Menu } from "../menu/menu";
import "./header.css";

export default function Header() {
    const title = "PRUEBA";
    const options = [
        { path: "./index.html", label: "Home" },
        { path: "./todo.html", label: "Tasks" },
        { path: "/about.html", label: "About" },
    ];

    return (
        <header>
            <h1>{title}</h1>
            <Menu options={options}></Menu>
            {}
        </header>
    );
}
