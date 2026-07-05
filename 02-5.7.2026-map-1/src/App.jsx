import Counter from './Counter';
import StatusBadge from './StatusBadge';
import Notification from './Notification';
import UsersList from './UsersList';
import TaskList from './TaskList';
import TodoApp from './TodoApp';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
function App() {
  const items = [
    <li key="1">Apple</li>,
    <li key="2">Banana</li>,
    <li key="3">Cherry</li>
  ]
  const fruits = ['Apple', 'Banana', 'Cherry']

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/status-badge" element={<StatusBadge />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/users-list" element={<UsersList />} />
      <Route path="/task-list" element={<TaskList />} />
      <Route path="/todo-app" element={<TodoApp />} />
    </Routes>
    </>
  )
}

export default App
