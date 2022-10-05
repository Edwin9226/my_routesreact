import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Login } from './pages/Login'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from '@/routes'
import { AuthGuard } from './guards'
import { Private } from './pages/private'

function App() {
  const [count, setCount] = useState(0)

  return (  
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE}/>}/>
        <Route path="*" element={<>Not Found!</>}/>
        <Route path={PublicRoutes.LOGIN} element={<Login/>}/>
        //privada
        <Route element={<AuthGuard/>}>
        <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />}/>
        </Route>
        
      </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App
