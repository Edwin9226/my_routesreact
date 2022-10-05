import { PrivateRoutes } from '@/routes';
import {  Navigate, Route } from 'react-router-dom';
import { Home } from './Home';

function Dashboard() {
  return (
    <>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD}/>}></Route>
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard/>}></Route>
      <Route path={PrivateRoutes.HOME} element={<Home/>}></Route>
    </>
     )
}
export default Dashboard