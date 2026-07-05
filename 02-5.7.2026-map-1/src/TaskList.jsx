const tasks = [
    { id: 1, text: 'Buy groceries', done: false },
    { id: 2, text: 'Call the plumber', done: true },
    { id: 3, text: 'Read a book', done: false },
    { id: 4, text: 'Write a report', done: true },
    { id: 5, text: 'Pay the bills', done: false },
    { id: 6, text: 'Buy a car', done: false },
    { id: 7, text: 'Buy a house', done: false },
    { id: 8, text: 'Buy a boat', done: false },
    { id: 9, text: 'Buy a plane', done: false },
    { id: 10, text: 'Buy a train', done: false },
]

export default function TaskList() {
    return (
      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{
            textDecoration: task.done ? 'line-through' : 'none',
            color: task.done ? 'gray' : 'black'
          }}>
            {task.done ? '✅' : '⬜'} {task.text}
          </li>
        ))}
      </ul>
    )
  }
  