import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Post from './Post/Post'
import User from './User/User'
import Home from './Home'
import { Navbar } from './Navbar'
import UserContext from './Context/UserContext'
import ThemeContext from './Context/ThemeContext'
import styles from './App.module.css'

function App() {
  const [theme, setTheme] = useState('light')
  const [user, setUser] = useState({
    name: 'John',
    age: 30,
    email: 'john@example.com',
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  function foo() {
    console.log('foo')
  }

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <UserContext.Provider value={{ user, setUser, x: 10, y: 20, foo }}>
          <div className={styles.shell}>
            <Navbar />
            <main className={styles.main}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user" element={<User />} />
                <Route path="/posts" element={<Post />} />
              </Routes>
            </main>
          </div>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  )
}

export default App
