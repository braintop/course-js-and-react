import { useState } from 'react';
export default function Card() {
    const [cardStyle, setCardStyle] = useState({
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: '16px',
    })
    const changeCardStyle = () => {
        setCardStyle({
            backgroundColor: '#b1b1b1',
            borderRadius: '16px',
            padding: '30px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            marginBottom: '32px',
        })
    }
    return (
      <div style={cardStyle}>
        <h2>My Card</h2>
        <p>Some content here</p>
        <button onClick={changeCardStyle}>Change Card Style</button>
      </div>
    )
  }
  