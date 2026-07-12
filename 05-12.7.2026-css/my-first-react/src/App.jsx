import Post from './Post/Post'
import User from './User/User'
import Card from './Card'
import StatusBadge from './StatusBadge'
import UserContext from './Context/UserContext'
import { useState } from 'react'
function App() {

  const [user, setUser] = useState({
    name: 'John',
    age: 30,
    email: 'john@example.com'
  })
  function foo(){
    console.log('foo')
  }
  return (
    <>
      <UserContext.Provider value={{user, setUser,x:10,y:20,foo}}>
        <h1 style={{ color: 'red', fontSize: '20px', fontWeight: 'bold' }}>Hello World</h1>
        <Post />
        <User />
        <Card />
      </UserContext.Provider>
      <StatusBadge isActive={true} />


    </>
  )
}

export default App
