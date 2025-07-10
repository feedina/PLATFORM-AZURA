import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import DashboardPage from './pages/Dashboard'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      {/* Rute default bisa diarahkan ke login atau landing page */}
      <Route path="/" element={<LoginPage />} /> 
    </Routes>
  )
}

export default App
