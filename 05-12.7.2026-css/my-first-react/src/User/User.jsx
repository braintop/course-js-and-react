import styles from './User.module.css';
import UserContext from '../Context/UserContext'
import { useContext } from 'react'
export default function User() {
    const {user, setUser, x, foo} = useContext(UserContext);

    function changeUser(e) {
        setUser({
            ...user,
            name: e.target.value
        })
    }
    return (
        <div>
            <h1 className={styles.zvika}>User</h1>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <input type="text" placeholder="Name"  onChange={changeUser} />
            <p>X: {x}</p>
        </div>
    )
}