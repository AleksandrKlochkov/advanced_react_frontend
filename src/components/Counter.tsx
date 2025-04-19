import React from "react";
import classes from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = React.useState(0);

    const increment = () => setCount(count+1);

    const decrement = () => setCount(count-1);

    return (
        <div className={classes.counter}>
            <div>{count}</div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>increment</button>
        </div>
    )
};