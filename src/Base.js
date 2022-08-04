import { Link } from "react-router-dom";
import { useHasPermissions } from "./hooks/useHasPermissions";
import useCurrentUser from "./hooks/useCurrentUser";
import Button from "./shared/Button";
import { PERMISSIONS } from "./utils/roles";
const Base = () => {
  const { currentUser } = useCurrentUser();
  const canLogRequest = useHasPermissions(PERMISSIONS.CAN_LOG_REQUEST);
  const canManageEmployee = useHasPermissions(PERMISSIONS.CAN_MANAGE_EMPLOYEES);
  const canManageAdmins = useHasPermissions(PERMISSIONS.CAN_MANAGE_ADMINS);
  const canAccessReports = useHasPermissions(PERMISSIONS.CAN_ACCESS_REPORTS);
  const canUpdateProducts = useHasPermissions(PERMISSIONS.CAN_UPDATE_PRODUCTS);
  const canModifyUsers = useHasPermissions(PERMISSIONS.CAN_MODIFY_USERS);
  const canAddAdmins = useHasPermissions(PERMISSIONS.CAN_ADD_ADMINS);
  const canAddCust = useHasPermissions(PERMISSIONS.CAN_ADD_CUSTOMER);
  const canAddEmployee = useHasPermissions(PERMISSIONS.CAN_ADD_EMPLOYEE);
  const canViewPaymnts = useHasPermissions(PERMISSIONS.CAN_VIEW_PAYMENTS);
  return (
    <>
      <p>
        <Link to="/admin">Go To Admin Route</Link>
      </p>
      <Button isDisabled={!canLogRequest}>Can Log Request</Button>
      <Button isDisabled={!canManageAdmins}>Can Manage Admins</Button>
      <Button isDisabled={!canAccessReports}>Can Access Reports</Button>
      <Button isDisabled={!canUpdateProducts}>Can Update Product</Button>
      <Button isDisabled={!canModifyUsers}>Can Modify Users</Button>
      <Button isDisabled={!canAddAdmins}>Can Add Admin</Button>
      <Button isDisabled={!canAddCust}>Can Add Customer</Button>
      <Button isDisabled={!canAddEmployee}>Can Add Employee</Button>
      <Button isDisabled={!canViewPaymnts}>Can View Payments</Button>
      <Button isDisabled={!canManageEmployee}>Can Manage Employee</Button>

      <hr />
      <h3>Permissions Applied for {currentUser.userType}</h3>
      <div className="perm-holder">
        {currentUser.permissions.map((key) => {
          const p = Object.entries(PERMISSIONS);
          const permission = p.filter((entry) => entry.includes(key))[0][0];
          return <p key={key}>{`${permission}\n`}</p>;
        })}
      </div>
    </>
  );
};
export default Base;
