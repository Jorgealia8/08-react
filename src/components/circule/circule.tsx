import { useState } from "react";
import "./circule.css";

export function Circule() {
    const [circule, setCircule] = useState(true);

    return (
        <div>
            <button
                className={`${
                    circule === true ? "circule__on" : "circule__off"
                } `}
                onClick={() => setCircule(!circule)}
            >
                {" "}
            </button>
        </div>
    );
}
