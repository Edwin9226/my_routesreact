import Logout from '@/components/Logout/Logout';
import { PrivateRoutes } from '@/routes';
import { RoutesWithNotFound } from '@/utilities';
import { lazy } from 'react';
import {  Navigate, Route } from 'react-router-dom';


const Dashboard = lazy(() =>import('./Dashboard/Dashboard'))
const Home = lazy(() =>import('./Home/Home'))

function Private() {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD}/>}></Route>
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard/>}></Route>
      <Route path={PrivateRoutes.HOME} element={<Home/>}></Route>
    </RoutesWithNotFound>
     )
}
export default Private