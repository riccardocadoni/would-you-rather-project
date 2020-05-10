import * as DATA from "../DATA";

export const getQuestions = () => {
  return (dispatch) => {
    DATA._getQuestions().then((questions) => dispatch(setQuestions(questions)));
  };
};
const setQuestions = (questions) => ({
  type: "SET_QUESTIONS",
  questions,
});

export const setNewAnswer = ({ authedUser, qid, answer }) => ({
  type: "SET_NEW_ANSWER",
  authedUser,
  qid,
  answer,
});
