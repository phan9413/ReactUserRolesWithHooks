import useCurrentUser from "./useCurrentUser";
export const useHasPermissions = (permissionNames) => {
  const { currentUser } = useCurrentUser();
  const { permissions } = currentUser;

  if (!permissions) {
    return false;
  }
  if (typeof permissionNames === "number") {
    return permissions.includes?.(permissionNames);
  } else if (Array.isArray(permissionNames)) {
    return permissions.some((permissionName) =>
      Boolean(permissionNames.includes?.(permissionName))
    );
  } else {
    return false;
  }
};
