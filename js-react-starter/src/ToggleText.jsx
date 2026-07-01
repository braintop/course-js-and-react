import { useState } from 'react';
export default function ToggleText() {
    const [isOn, setIsOn] = useState(false);
    let text = '';
    function toggle() {
        setIsOn(!isOn);
        
    }
    if (isOn) {
        text = 'my title';
    } else {
        text = '';
    }
    return (
        <div>
            <h1>ToggleText</h1>
            <button onClick={toggle}>Toggle</button>
            <p>{text}</p>
        </div>
    )
}