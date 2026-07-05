import { useState } from 'react';
export default function Counter(props) {
    //let count = 0;
    const [count, setCount] = useState(5);
    function addOne() {
        //count++;
        setCount(count + 1);
    }


    return (
        <div>
            <h1>Counter of {props.name}</h1>
            <button onClick={addOne}>Click me</button>
            <p>Count: {count}</p>
        </div>
    )
}