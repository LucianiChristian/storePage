import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Photos from './pages/Photos'
import Cart from './pages/Cart'

function App() {
  return (
    <div>
      <Header />
      <main className="pageContainer">
        <Routes>
          <Route path="/" element={<Photos />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  )
}

export default App