import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import HeaderLayout from "./Layout/HeaderLayout";
import useCurrentUser from "./hooks/useCurrentUser";
import { useHasRole } from "./hooks/useHasRoles";

const ProtectedRoute = ({
  component: Component,
  claimWithRole = [],
  ...props
}) => {
  const shouldCheckForRole =
    Array.isArray(claimWithRole) && claimWithRole.length;
  const canClaimWithRole = useHasRole(claimWithRole);
  const canClaim = !shouldCheckForRole || canClaimWithRole;
  const { currentUser } = useCurrentUser();
  const history = useHistory();
  const [offMsg, setOffMsg] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      setOffMsg(true);
      setTimeout(() => {
        setOffMsg(false);
        history.push("/login");
      }, 1000);
    }
  }, [currentUser, history]);
  if (currentUser) {
    return (
      <HeaderLayout>
        {canClaim ? (
          <Component {...props} />
        ) : (
          <>
            <p className="error-msg">
              You do not have roles/permissions to access this route
            </p>
            <p>
              <Link to="/">Back</Link>
            </p>
          </>
        )}
      </HeaderLayout>
    );
  }
  return <>{offMsg ? <>Redirecting to Login Page</> : null}</>;
};
export default ProtectedRoute;
