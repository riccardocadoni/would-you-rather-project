import { SET_AUTHED_USER, UNSET_AUTHED_USER } from "../actions/authedUser";

const authedUser = (authedUser = null, action) => {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id;

    case UNSET_AUTHED_USER:
      return null;

    default:
      return authedUser;
  }
};
export default authedUser;
