import { useState } from "react";
export default function StatusBadge({ initialIsOnline }) {

    //phase 1 : initial state varibvales 
    const [isOnline, setIsOnline] = useState(initialIsOnline);
    
    //phase 2 : function to update the state
    function handleToggle() {
        setIsOnline(!isOnline);
    }
    //phase 3 : render the UI
    return (
      <div>
        {isOnline
          ? <span style={{ color: 'green' }}>Online</span>
          : <span style={{ color: 'red' }}>Offline</span>
        }
        <button onClick={handleToggle}>Toggle</button>
      </div>
    )
  }
  