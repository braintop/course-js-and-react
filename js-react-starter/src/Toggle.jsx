import { useState } from 'react';
export default function Toggle() {
    const [isOn, setIsOn] = useState(false);
    function toggle() {
        setIsOn(!isOn);
    }
    let status = '';
    if (isOn) {
        status = 'On';
    } else {
        status = 'Off';
    }
  //  let status = isOn ? 'On' : 'Off';
    return (
        <div>
            <h1>Toggle</h1>
            <button onClick={toggle}>{status}</button>
        </div>
    )
}