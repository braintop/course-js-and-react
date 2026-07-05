import { useState } from "react";
export default function Counter({initialCount}) {
    const [count, setCount] = useState(0);

    return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

// export default function Counter(props) {
//     const [count, setCount] = useState(props.initialCount);
    
//     return (
//     <div>
//       <h1>Counter</h1>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </div>
//   )
// }