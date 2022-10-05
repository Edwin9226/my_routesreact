import { createUser } from "@/redux/states/user";
import { PrivateRoutes } from "@/routes";
import { getMorthy } from "@/services";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {

  const dispatch = useDispatch();
  const navigate= useNavigate();
  const login= async () => {
  try {
    const result= await getMorthy();
    dispatch(createUser(result) );
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