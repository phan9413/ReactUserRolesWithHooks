import { Link } from "react-router-dom";
import useCurrentUser from "../hooks/useCurrentUser";

const Header = () => {
  const { currentUser } = useCurrentUser();
  return (
    <div className="flex justify-between mb-1 align-center header">
      <p style={{ textAlign: "center", margin: 0 }}>
        <span style={{ fontSize: "14px" }}>Logged in as </span>
        <br />
        <span style={{ fontWeight: "bold" }}>{currentUser.userType}</span>
      </p>
      <Link to="/logout">Logout</Link>
    </div>
  );
};

export default Header;
