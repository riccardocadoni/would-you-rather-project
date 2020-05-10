export const setAuthedUser = (id) => ({
  type: "SET_AUTHED_USER",
  id,
});

export const logOutUser = () => ({
  type: "UNSET_AUTHED_USER",
});
