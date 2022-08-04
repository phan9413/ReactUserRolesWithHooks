import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import useCurrentUser from "./hooks/useCurrentUser";

const Logout = () => {
  const history = useHistory();
  const { setCurrentUser } = useCurrentUser();

  useEffect(() => {
    setCurrentUser(null);
    history.push("/login");
  }, [setCurrentUser, history]);
  return <>Logging Out</>;
};

export default Logout;
