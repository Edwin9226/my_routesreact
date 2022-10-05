import { createUser } from "@/redux/states/user";
import { getMorthy } from "@/services";
import { useDispatch } from "react-redux";

function Login() {

  const dispatch = useDispatch();
  const login= async () => {
  try {
    const result= await getMorthy();
    dispatch(createUser(result) );
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