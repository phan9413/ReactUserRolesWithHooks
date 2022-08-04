import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./Login";
import Base from "./Base";
import ProtectedRoute from "./ProtectedRoute";
import UserContext from "./context/userContext";
import { useState, useMemo } from "react";
import Logout from "./Logout";
import Admin from "./Admin";
import { ROLES } from "./utils/roles";
const Routes = () => {
  const [currentUser, setCurrentUser] = useState();
  const value = useMemo(() => ({ currentUser, setCurrentUser }), [currentUser]);
  return (
    <UserContext.Provider value={value}>
      <Router>
        <Switch>
          <ProtectedRoute exact path="/" component={Base} />
          <ProtectedRoute
            exact
            path="/admin"
            component={Admin}
            claimWithRole={[ROLES.ADMIN, ROLES.SUPER_ADMIN]}
          />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};
export default Routes;
