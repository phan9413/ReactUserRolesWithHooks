import { useHistory } from "react-router-dom";
import useCurrentUser from "./hooks/useCurrentUser";
import { setupLogin } from "./service/loginService";
import { ROLES } from "./utils/roles";

const Login = () => {
  const { setCurrentUser } = useCurrentUser();
  const history = useHistory();
  const initiateLogin = (role_key) => {
    //do some api calls and fetch the role of user.
    const { permissions, user } = setupLogin(role_key);
    setCurrentUser({
      permissions,
      ...user
    });
    history.push("/");
  };
  return (
    <div className="m-auto">
      <div className="login-holder">
        <button onClick={() => initiateLogin(ROLES.SUPER_ADMIN)}>
          Login as Super Admin
        </button>
        <button onClick={() => initiateLogin(ROLES.ADMIN)}>
          Login as Admin
        </button>
        <button onClick={() => initiateLogin(ROLES.CUSTOMER)}>
          Login as Customer
        </button>
        <button onClick={() => initiateLogin(ROLES.EMPLOYEE)}>
          Login as Employee
        </button>
      </div>
    </div>
  );
};
export default Login;
