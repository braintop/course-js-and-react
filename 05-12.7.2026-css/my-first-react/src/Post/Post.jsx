import styles from './Post.module.css';
import UserContext from '../Context/UserContext'
import { useContext } from 'react'
export default function Post() {
    const {user} = useContext(UserContext);
    return (
        <div>
            <h1 className={styles.zvika}>Post</h1>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}