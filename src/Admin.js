import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <h3>Welcome To Admin Page!!</h3>I am only visible to Admin and Super Admin
      Roles.
      <p>
        <Link to="/">Back</Link>
      </p>
    </>
  );
};
export default Admin;
