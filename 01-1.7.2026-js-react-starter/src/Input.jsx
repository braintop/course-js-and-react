import { useState } from 'react';
export default function Input() {

    const [text, setText] = useState('');
    function handleChange(event) {
        console.log(event.target.value);
        setText(event.target.value);
    }
    return (
        <div>
            <h1>Input</h1>

            <input  type="text" placeholder="Enter your name" onChange={handleChange}/>

            <p>{text}</p>
        </div>
    )
}