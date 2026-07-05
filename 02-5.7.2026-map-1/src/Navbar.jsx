import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home|</Link>
      <Link to="/counter">Counter|</Link>
      <Link to="/status-badge">Status Badge|</Link>
      <Link to="/notification">Notification|</Link>
      <Link to="/users-list">Users List|</Link>
      <Link to="/task-list">Task List</Link>
      <Link to="/todo-app">Todo App</Link>
    </nav>
  )
}