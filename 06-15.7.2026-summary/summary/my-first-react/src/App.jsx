import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import NotFound from './pages/NotFound/NotFound'
import AddProduct from './pages/AddProduct/AddProduct'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    </>
  )
}

export default App
