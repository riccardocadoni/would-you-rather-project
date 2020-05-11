import * as DATA from "../DATA";

export const SET_USERS = "SET_USERS";
export const SET_NEW_ANSWER = "SET_NEW_ANSWER";
export const SET_NEW_QUESTION = "SET_NEW_QUESTION";

export const getUsers = () => {
  return (dispatch) => {
    DATA._getUsers().then((users) => dispatch(setUsers(users)));
  };
};

const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const setNewAnswerUser = ({ authedUser, qid, answer }) => ({
  type: SET_NEW_ANSWER,
  authedUser,
  qid,
  answer,
});

export const setNewQuestionUser = (question) => ({
  type: SET_NEW_QUESTION,
  question,
});
