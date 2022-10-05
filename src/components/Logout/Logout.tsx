import { UserKey } from '@/redux/states/user';
import { PublicRoutes } from '@/routes';
import { clearLocalStorage } from '@/utilities';
import { useNavigate } from 'react-router-dom';
function Logout() {
    const navigate= useNavigate();
    const logOut = () => {
    clearLocalStorage(UserKey);
    navigate(PublicRoutes.LOGIN, {replace: true});
    }
  return <button onClick={logOut}>Logout</button>;
}
export default Logout