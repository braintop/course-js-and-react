import { useParams } from 'react-router-dom'
import { users } from '../data/users'
export default function SelectedUser() {
    const { id } = useParams();//{id: '1'}
    const user = users.find((user) => user.id === parseInt(id));
    return (
        <div>
            <h1>Selected User</h1>
            <p>User ID: {id}</p>
            <p>User Name: {user.name}</p>
        </div>
    )
}

//destructuring the useParams hook
//const { id, page } = useParams();//{id: '1', page: '1', name: 'John Doe'}

//const id = 1 