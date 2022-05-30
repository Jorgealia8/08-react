import { SyntheticEvent, useState } from "react";
import "./counter.css";

export function Counter({ initial }: { initial: number }) {
    const [counter, setCounter] = useState(initial);

    function handlerClick(ev: SyntheticEvent, value: number) {
        setCounter((prev) => prev + value);
        console.log("Click", ev, counter);
    }
    return (
        <>
            <output>{counter}</output>
            <div className="buttons">
                <button onClick={(ev) => handlerClick(ev, -1)}> - </button>
                <button onClick={(ev) => handlerClick(ev, +1)}> + </button>
            </div>
        </>
    );
}
