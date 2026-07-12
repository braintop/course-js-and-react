import { useState } from 'react';
function StatusBadge({ isActive }) {
    const [showBadge, setShowBadge] = useState(isActive);
    return (
      <span style={{
        color: showBadge ? 'green' : 'red',
        fontWeight: 'bold',
        padding: '4px 12px',
        borderRadius: '12px',
        backgroundColor: showBadge ? '#e6ffe6' : '#ffe6e6',
      }}>
        {showBadge ? 'Active' : 'Inactive'} 
        <button onClick={() => setShowBadge(!showBadge)}>Change Status</button>
      </span>
    )
  }
  export default StatusBadge;