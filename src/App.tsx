import { Suspense, lazy } from 'react'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from '@/routes'
import { AuthGuard, RolGuard } from './guards'
import { RoutesWithNotFound } from './utilities'
import { Provider } from 'react-redux'
import store from './redux/store'
import Logout from './components/Logout/Logout'
import { Roles } from './models'

const Login= lazy(() =>import('./pages/Login/Login'));
const Private= lazy(() =>import('./pages/private/Private'));

function App() {
  return (  
    <div className="App">
      <Suspense fallback={<>Cargando</>}>
      <Provider store={store}>
      <BrowserRouter>
      <Logout/>
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE}/>}/>
        <Route path={PublicRoutes.LOGIN} element={<Login/>}/>
      
        <Route element={<AuthGuard privateValidation={true}/>}>
        <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />}/>
        </Route>
        <Route element={<RolGuard  rol={Roles.ADMIN}/>}></Route>
      </RoutesWithNotFound>
      </BrowserRouter>
      </Provider>
      </Suspense>
      </div>
  )
}

export default App
