import { useState } from "react";
export default function Notification({ initialCount }) {
    const [count, setCount] = useState(initialCount);
    function handleIncrement() {
        setCount(count + 1);
    }
    function handleDecrement() {
        setCount(count - 1);
    }
    return (
      <div>
        {count > 0 && <p>You have {count} messages</p>}
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    )
  }
  