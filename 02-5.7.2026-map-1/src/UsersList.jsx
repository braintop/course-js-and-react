import { useState } from "react";
const users = [
  { id: 1, name: 'Daniel', age: 25 },
  { id: 2, name: 'Sarah', age: 30 },
  { id: 3, name: 'Mike', age: 17 },
  { id: 4, name: 'John', age: 20 },
  { id: 5, name: 'Jane', age: 7 },
  { id: 6, name: 'Jim', age: 3 },
  { id: 7, name: 'Jill', age: 26 },
  { id: 8, name: 'Jack', age: 28 },
  { id: 9, name: 'Jill', age: 4 },
  { id: 10, name: 'Jack', age: 32 },
]

export default function UsersList() {

  const [selectedUsers, setSelectedUsers] = useState([]);
  function showAdults() {
    const adults = users.filter(user => user.age >= 18)
    setSelectedUsers(adults);
  }
  function showChildren() {
    const children = users.filter(user => user.age < 18)
    setSelectedUsers(children);
  }

  return (
    <div>
      <button onClick={showAdults}>Show Adults</button>
      <button onClick={showChildren}>Show Children</button>

      <div>Selected Users: {selectedUsers.length}
        <ul>{selectedUsers.map(user => <li key={user.id}>{user.name}</li>)}</ul>
      </div>
    </div>
  )
}
