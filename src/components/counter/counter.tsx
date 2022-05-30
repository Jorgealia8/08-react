import { SyntheticEvent } from "react";
import "./counter.css";
export function Counter() {
    let n = 0;

    function handlerClick(ev: SyntheticEvent, value: number) {
        n = n + value;
        console.log("click", ev, n);
    }

    return (
        <>
            <output>{n}</output>
            <div className="buttons">
                <button onClick={(ev) => handlerClick(ev, -1)}> - </button>
                <button onClick={(ev) => handlerClick(ev, +1)}> + </button>
            </div>
        </>
    );
}
