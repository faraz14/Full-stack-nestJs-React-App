import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignUpPage } from './pages/signUp'
import { SignInPage } from './pages/signin'
import { ProtectedRoute } from './pages/protectedRoutes'
import ApplicationPage from './pages/applicationpage'

function App() {

  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route path='*' element={<ProtectedRoute>
          <ApplicationPage />
        </ProtectedRoute>} />
        <Route path='/welcome' element={<ProtectedRoute>
          <ApplicationPage />
        </ProtectedRoute>} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
