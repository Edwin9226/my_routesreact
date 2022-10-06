import { Roles } from "@/models";
import { createUser, resetUser, UserKey } from "@/redux/states/user";
import { PrivateRoutes, PublicRoutes } from "@/routes";
import { getMorthy } from "@/services";
import { clearLocalStorage } from "@/utilities";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {

  const dispatch = useDispatch();
  const navigate= useNavigate();

  useEffect(() => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(`/${PublicRoutes.LOGIN}`, {replace: true});
  },[]);

  const login= async () => {
  try {
    const result= await getMorthy();
    dispatch(createUser({...result,rol:Roles.ADMIN})); 
    navigate(`/${PrivateRoutes.PRIVATE}`, {replace: true});
  } catch (error) {
    
  }
}

  return (
    <div><h2>Página del Login</h2>
    <button onClick={login}>Login</button>
    </div>
  )
}
export default Login