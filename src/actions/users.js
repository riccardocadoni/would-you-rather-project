import * as DATA from "../DATA";

export const getUsers = () => {
  return (dispatch) => {
    DATA._getUsers().then((users) => dispatch(setUsers(users)));
  };
};

const setUsers = (users) => ({
  type: "SET_USERS",
  users,
});

export const setNewAnswerUser = ({ authedUser, qid, answer }) => ({
  type: "SET_NEW_ANSWER",
  authedUser,
  qid,
  answer,
});
