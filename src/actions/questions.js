import * as DATA from "../DATA";

export const SET_QUESTIONS = "SET_QUESTIONS";
export const SET_NEW_ANSWER = "SET_NEW_ANSWER";
export const SET_NEW_QUESTION = "SET_NEW_QUESTION";

export const getQuestions = () => {
  return (dispatch) => {
    DATA._getQuestions().then((questions) => dispatch(setQuestions(questions)));
  };
};
const setQuestions = (questions) => ({
  type: SET_QUESTIONS,
  questions,
});

export const setNewAnswer = ({ authedUser, qid, answer }) => ({
  type: SET_NEW_ANSWER,
  authedUser,
  qid,
  answer,
});

export const setNewQuestion = (question) => ({
  type: SET_NEW_QUESTION,
  question,
});
