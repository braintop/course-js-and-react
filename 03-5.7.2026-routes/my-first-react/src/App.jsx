import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'
import NotFound from './Pages/NotFound'
import Navbar from './Components/Navbar'
import UserList from './Components/UserList'
import SelectedUser from './Components/SelectedUser'
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/users/:id" element={<SelectedUser />} />
        <Route path="/users" element={<UserList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
