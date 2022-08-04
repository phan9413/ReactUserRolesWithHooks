import { getUserType } from "../utils/getUserUtil";
import { getPermissions } from "../utils/roles";

const getUserPermissions = (role_key) => {
  return getPermissions[role_key];
};
export const setupLogin = (role_key) => {
  return {
    user: getUserType(role_key),
    permissions: getUserPermissions(role_key)
  };
};
